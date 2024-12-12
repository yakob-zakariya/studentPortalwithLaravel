<?php

namespace App\Http\Controllers\DepartmentHead;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AcademicYear;
use App\Models\Batch;
use App\Models\Section;
use App\Models\Semester;
use Inertia\Inertia;
use App\Models\Course;
use App\Models\Teacher;
use App\Models\TeacherCourseSectionAssignment;
use App\Models\BatchCourseSemester;

class TeacherAssignmentController extends Controller
{
    public function showBatchAndSemester(Request $request)
    {
        $batches = $request->user()->departmentHead->department->batches()->with('department')->get();
        $academicYears = AcademicYear::all();

        return Inertia::render('DepartmentHead/TeacherAssignment/Index', ['batches' => $batches, 'academicYears' => $academicYears]);
    }

    public function submitBatchAndSemester(Request $request)
    {
        $validated = $request->validate([
            'batch_id' => ['required'],
            'semester_id' => ['required'],
            'section_id' => ['required'],
            'academicYear_id' => ['required']
        ]);

        $section = Section::find($request->input('section_id'));
        $semester = Semester::find($request->input('semester_id'));



        return redirect()->route('departmentHead.selectCourses.sections.semesters', [
            'section' => $section,
            'semester' => $semester
        ]);
    }

    public function showCoursesForAssignment(Section $section, Semester $semester)
    {

        $batch = $section->batch;

        $courses_allocations = BatchCourseSemester::where('batch_id', $batch->id)->where('semester_id', $semester->id)->with(['course', 'teacherCourseSectionAssignments.teacher.user'])->get();

        $courses_allocations = BatchCourseSemester::where('batch_id', $batch->id)
            ->where('semester_id', $semester->id)
            ->with([
                'course',
                'teacherCourseSectionAssignments' => function ($query) use ($section) {
                    $query->where('section_id', $section->id); // Filter by section
                },
                'teacherCourseSectionAssignments.teacher.user'
            ])
            ->get();


        return Inertia::render('DepartmentHead/TeacherAssignment/SelectCourses', [
            'allocatedCourses' => $courses_allocations,
            'section' => $section->load('batch'),
            'semester' => $semester->load('academicYear'),
        ]);
    }

    public function selectCourseForTeacherAssignment(Request $request, $allocation_id)
    {

        $section = Section::find($request->input('section_id'));

        return redirect()->route("departmentHead.selectTeacher.sections.semesters.courses", [
            'allocation_id' => $allocation_id,
            'section_id' => $section->id,

        ]);
    }

    public function selectTeacherForAssignment($allocation_id, $section_id)
    {
        $course_allocation = BatchCourseSemester::where('id', $allocation_id)->with(['course', 'semester'])->first();

        $course_allocation->semester->load('academicYear');


        $section = Section::find($section_id);

        $teachers = Teacher::all();
        foreach ($teachers as $teacher) {
            $teacher->load('user');
        }


        return Inertia::render('DepartmentHead/TeacherAssignment/SelectTeacher', [
            'teachers' => $teachers,
            'course_allocation' => $course_allocation,
            'section' => $section,

        ]);
    }

    public function storeSelectedTeacher(Request $request)
    {

        $request->validate([
            'teacher_id' => ['required'],
        ]);

        $section_id = $request->input('section_id');
        $allocation_id = $request->input('allocation_id');
        $teacher_id = $request->input('teacher_id');



        $assignment = TeacherCourseSectionAssignment::create([
            'section_id' => $section_id,
            'teacher_id' => $teacher_id,
            'batch_course_semester_id' => $allocation_id
        ]);

        return redirect()->route("departmentHead.selectTeacherForAssignmentUpdate", [
            'assignment_id' => $assignment->id,
        ])->with('success', 'Teacher is Assignmed Successfully');
    }



    public function selectCourseForTeacherAssignmentUpdate(Request $request)
    {
        $assignment_id = $request->input('assignment_id');
        return redirect()->route("departmentHead.selectTeacherForAssignmentUpdate", [
            'assignment_id' => $assignment_id
        ]);
    }

    public function selectTeacherForAssignmentUpdate($assignment_id)
    {
        $teachers = Teacher::all();
        foreach ($teachers as $teacher) {
            $teacher->load('user');
        }

        $courseAssignment = TeacherCourseSectionAssignment::where('id', $assignment_id)->with(['section', 'courseAllocation.course', 'courseAllocation.semester.academicYear'])->first();



        return Inertia::render('DepartmentHead/TeacherAssignment/SelectTeacherForUpdate', [
            'teachers' => $teachers,
            'courseAssignment' => $courseAssignment

        ]);
    }


    public function storeSelectedTeacherUpdate(Request $request, $assignment_id)
    {


        $request->validate([
            'teacher_id' => ['required'],
        ]);

        $assignment = TeacherCourseSectionAssignment::find($assignment_id);

        $assignment->update([
            'teacher_id' => $request->input('teacher_id')
        ]);

        return redirect()->route("departmentHead.selectTeacherForAssignmentUpdate", [
            'assignment_id' => $assignment->id,
        ])->with('success', 'Teacher is Assignment Updated Successfully');
    }




    // get sectios by batch json response

    public function getSections(Batch $batch)
    {
        return response()->json($batch->sections);
    }
}
