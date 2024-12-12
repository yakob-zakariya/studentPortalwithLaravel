<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\AcademicYear;
use App\Models\BatchCourseSemester;
use App\Models\Registration;
use App\Models\SemesterRegistration;
use Illuminate\Support\Facades\DB;
use App\Models\Course;

class CourseRegistrationController extends Controller
{
    public function showSemesterForm()
    {
        $academicYears = AcademicYear::all();
        return Inertia::render('Student/CourseRegistration/Index', [
            'academicYears' => $academicYears
        ]);
    }

    public function submitSemesterForm(Request $request)
    {
        $request->validate([
            'academicYear_id' => ['required'],
            'semester_id' => ['required'],
        ]);
        // dd($request->all());

        return redirect()->route('students.showCoursesForRegistration', [
            'semesterId' => $request->input('semester_id')
        ]);
    }

    public function showCoursesForRegistration(Request $request, $semesterId)
    {
        $student = $request->user()->student;
        $batch = $student->batch;

        $allocatedCourses = BatchCourseSemester::where('batch_id', $batch->id)->where('semester_id', $semesterId)->with(['course', 'semester.academicYear'])->get();

        $registeredCourses = Registration::where('student_id', $student->id)->where('semester_id', $semesterId)->with(['course', 'semester.academicYear'])->get();

        if ($registeredCourses->count() > 0) {
            return Inertia::render('Student/CourseRegistration/RegisteredCourses', [
                'registeredCourses' => $registeredCourses
            ]);
        }

        return Inertia::render('Student/CourseRegistration/ShowCoursesForRegistration', ['allocatedCourses' => $allocatedCourses, 'semesterId' => $semesterId]);
    }

    public function storeCourseRegistration(Request $request)
    {
        $request->validate([
            'selectedCourses' => ['array', 'required'],
        ]);

        $selectedCourses = $request->input('selectedCourses');
        $semesterId = $request->input('semesterId');
        $student = $request->user()->student;

        DB::transaction(function () use ($selectedCourses, $semesterId, $student) {
            $semesterRegistration = $this->createOrUpdateSemesterRegistration($student->id, $semesterId);
            $totalEtcs = 0;

            foreach ($selectedCourses as $selectedCourse) {

                $totalEtcs += Course::find($selectedCourse)->ETCS;
                Registration::create([
                    'course_id' => $selectedCourse,
                    'semester_id' => $semesterId,
                    'student_id' => $student->id,
                    'section_id' => ($student->section) ? $student->section_id : null,
                ]);
            }

            $semesterRegistration->update([
                'total_etcs' => $totalEtcs
            ]);
        });



        return redirect()->route('students.showCoursesForRegistration', [
            'semesterId' => $semesterId
        ])->with('success', 'Course Registration is Added Successfully and waiting for registrtral approval');
    }



    protected function createOrUpdateSemesterRegistration($studentId, $semesterId)
    {
        return SemesterRegistration::updateOrCreate(
            [
                'student_id' => $studentId,
                'semester_id' => $semesterId
            ],
            [
                'total_etcs' => null,
                'semester_gpa' => null,
                'cumulative_gpa' => null,
                'status' => 'Not Determined'
            ]
        );
    }

    public function getSemesters($academicYearId)
    {
        $academicYear = AcademicYear::find($academicYearId);

        return response()->json($academicYear->semesters);
    }
}
