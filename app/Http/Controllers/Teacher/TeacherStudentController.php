<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\AcademicYear;
use App\Models\Assesment;
use App\Models\Registration;
use App\Models\TeacherCourseSectionAssignment;
use App\Models\Semester;
use App\Models\Course;
use App\Models\Section;
use App\Models\SemesterRegistration;


class TeacherStudentController extends Controller
{
    public function chooseSemester()
    {
        $academicYears = AcademicYear::all();
        return Inertia::render('Teacher/Courses/ChooseSemester', ['academicYears' => $academicYears]);
    }

    public function submitSemester(Request $request)
    {
        $request->validate([
            'academicYear_id' => ['required'],
            'semester_id' => ['required'],
        ]);

        return redirect()->route('teachers.allocatedCourses', [
            'semesterId' => $request->input('semester_id')
        ]);
    }

    public function showAllocatedCourses(Request $request, $semesterId)
    {
        $semester = Semester::with('academicYear')->find($semesterId);
        $teacher = $request->user()->teacher;

        $assignments = TeacherCourseSectionAssignment::with(['courseAllocation.course', 'section.batch.department'])->whereHas('courseAllocation.semester', function ($query) use ($semesterId) {
            $query->where('id', $semesterId);
        })->whereHas('teacher', function ($query) use ($teacher) {
            $query->where('id', $teacher->id);
        })->get();

        // dd($assignments);

        return Inertia::render('Teacher/Courses/ShowAllocatedCourses', [
            'assignments' => $assignments,
            'semester' => $semester
        ]);
    }


    public function showRegisteredStudents(Request $request, $courseId, $sectionId, $semesterId)
    {
        // Get the search query from the request
        $search = $request->input('search');

        // Query registrations with filters and optional search
        $registrations = Registration::where('course_id', $courseId)
            ->where('section_id', $sectionId)
            ->where('semester_id', $semesterId)
            ->with(['student.user', 'student.batch.department', 'course', 'assessment'])
            ->when($search, function ($query, $search) {
                $query->whereHas('student.user', function ($studentQuery) use ($search) {
                    $studentQuery->where('first_name', 'LIKE', "%{$search}%")
                        ->orWhere('middle_name', "LIKE", "%{$search}%")
                        ->orWhere('last_name', "LIKE", "%{$search}%")
                        ->orWhere('username', 'LIKE', "%{$search}%"); // to search  by student id later
                });
            })
            ->paginate(7);

        $semester = Semester::with('academicYear')->find($semesterId);
        $course = Course::find($courseId);
        $section = Section::with('batch.department')->find($sectionId);

        return Inertia::render(
            'Teacher/Courses/ShowRegisteredStudents2',
            [
                'registrations' => $registrations,
                'semester' => $semester,
                'course' => $course,
                'section' => $section,
                'search' => $search, // Pass the search term back to the frontend
            ]
        );
    }

    // public function showRegisteredStudents($courseId, $sectionId, $semesterId)
    // {

    //     $registrations = Registration::where('course_id', $courseId)->where('section_id', $sectionId)->where('semester_id', $semesterId)->with(['student.user', 'student.batch.department', 'course'])->get();

    //     $semester = Semester::with('academicYear')->find($semesterId);
    //     $course = Course::find($courseId);
    //     $section = Section::with('batch.department')->find($sectionId);

    //     return Inertia::render(
    //         'Teacher/Courses/ShowRegisteredStudents2',
    //         [
    //             'registrations' => $registrations,
    //             'semester' => $semester,
    //             'course' => $course,
    //             'section' => $section
    //         ]
    //     );
    // }



    public function fillMarks($registrationId)
    {
        $registration = Registration::find($registrationId);
        $course = $registration->course;
        $section = $registration->section->load('batch.department');
        $semester = $registration->semester->load('academicYear');
        $student = $registration->student->load('user');



        return Inertia::render('Teacher/Courses/FillMarks', [
            'course' => $course,
            'section' => $section,
            'semester' => $semester,
            'student' => $student,
            'registrationId' => $registrationId
        ]);
    }

    public function submitMarks($registrationId, $c, $m, $f)
    {
        // $request->validate([
        //     'continous_assessment' => ['required', 'numeric', 'min:0', 'max:20'],
        //     'mid_exam' => ['required', 'numeric', 'min:0', 'max:30'],
        //     'final_exam' => ['required', 'min:0', 'numeric', 'max:50'],
        // ]);

        // $grade = $request->input('continous_assessment') + $request->input('mid_exam') + $request->input('final_exam');

        $grade = $c + $m + $f;

        $registration = Registration::find($registrationId);

        switch ($grade) {
            case $grade >= 90:
                $grade = 'A+';
                break;
            case $grade >= 85:
                $grade = 'A';
                break;
            case $grade >= 80:
                $grade = 'A-';
                break;
            case $grade >= 75:
                $grade = 'B+';
                break;
            case $grade >= 70:
                $grade = 'B';
                break;
            case $grade >= 65:
                $grade = 'B-';
            case $grade >= 60:
                $grade = 'C+';
                break;
            case $grade >= 50:
                $grade = 'C';
                break;
            case $grade >= 40:
                $grade = 'D';
                break;
            default:
                $grade = 'F';
        }


        // Assesment::create([
        //     'registration_id' => $registrationId,
        //     'continous_assessment' => $request->input('continous_assessment'),
        //     'mid_exam' => $request->input('mid_exam'),
        //     'final_exam' => $request->input('final_exam'),
        //     'grade' => $grade
        // ]);

        Assesment::create([
            'registration_id' => $registrationId,
            'continous_assessment' => $c,
            'mid_exam' => $m,
            'final_exam' => $f,
            'grade' => $grade
        ]);




        // return redirect()->route('teachers.registeredStudents', [
        //     'courseId' => $registration->course_id,
        //     'sectionId' => $registration->section_id,
        //     'semesterId' => $registration->semester_id,

        // ])->with('success', 'Marks submitted successfully');
    }


    // demo to calculate gpa
    public function calculateGpa($studentId, $semesterId)
    {
        $registrations = Registration::where('student_id', $studentId)->where('semester_id', $semesterId)->with('assessment')->get();

        $semesterRegistration = SemesterRegistration::where('student_id', $studentId)->where('semester_id', $semesterId)->first();

        $totalGrade = 0;

        foreach ($registrations as $registration) {
            if ($registration->assessment->grade == 'A') {
                $totalGrade +=  4 * $registration->course->ETCS;
            } elseif ($registration->assessment->grade == 'B') {
                $totalGrade +=  3 * $registration->course->ETCS;
            } elseif ($registration->assessment->grade == 'C') {
                $totalGrade +=  2 * $registration->course->ETCS;
            } elseif ($registration->assessment->grade == 'D') {
                $totalGrade +=  1 * $registration->course->ETCS;
            } else {
                $totalGrade +=  0 * $registration->course->ETCS;
            }
        }

        $semesterGpa = $totalGrade / $semesterRegistration->total_etcs;

        $semesterRegistration->update([
            'semester_gpa' => $semesterGpa
        ]);
    }
    public function getSemesters($academicYearId)
    {
        $academicYear = AcademicYear::find($academicYearId);
        $semesters = $academicYear->semesters;
        return response()->json($semesters);
    }
}
