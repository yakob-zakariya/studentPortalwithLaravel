<?php

namespace App\Http\Controllers\DepartmentHead;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AcademicYear;
use App\Models\Semester;
use App\Models\Batch;
use App\Models\BatchCourseSemester;
use App\Models\Course;
use Inertia\Inertia;

class CourseAllocationController extends Controller
{
    public function showBatchAndSemester(Request $request)
    {
        $batches = $request->user()->departmentHead->department->batches()->with('department')->get();
        $academicYears = AcademicYear::all();

        return Inertia::render('DepartmentHead/CourseAllocation/Index', ['batches' => $batches, 'academicYears' => $academicYears]);
    }

    public function submitBatchAndSemester(Request $request)
    {
        $validated = $request->validate([
            'batch_id' => ['required'],
            'semester_id' => ['required'],
            'academicYear_id' => ['required'],
        ]);

        return redirect()->route('departmentHead.allocation.show_courses', [
            'batch_id' => $validated['batch_id'],
            'semester_id' => $validated['semester_id'],

        ]);
    }

    public function showCoursesForAllocation(Request $request, $batch_id, $semester_id)
    {




        // Fetch the batch and semester details
        $batch = Batch::findOrFail($batch_id);
        $semester = Semester::findOrFail($semester_id);

        $courseAllocatedBefore = BatchCourseSemester::where('batch_id', $batch_id)->with('course')->get();

        $allocatedCourses = BatchCourseSemester::where('batch_id', $batch_id)->where('semester_id', $semester_id)->with('course')->get();





        $allocatedCourseIds = $courseAllocatedBefore->pluck('course.id');
        // dd($allocatedCourseIds);


        $allCourses = Course::whereNotIn('id', $allocatedCourseIds)->get();

        // dd($allCourses);



        // Pass data to Inertia view
        return Inertia::render('DepartmentHead/CourseAllocation/SelectCourses', [
            'batch' => $batch->load('department'),
            'semester' => $semester->load('academicYear'),
            'allCourses' => $allCourses,
            'allocatedCourses' => $allocatedCourses,
        ]);
    }

    public function storeAllocatedCourses(Request $request)
    {

        $request->validate([
            'selectedCourses' => ['required', 'array'],
        ]);


        $batch_id = $request->input('batch_id');
        $semester_id = $request->input('semester_id');

        $selectedCourses = $request->input('selectedCourses');
        $allocatedCourses = BatchCourseSemester::where('batch_id', $batch_id)->with('course')->get();
        $currentSemesterAllocations = $allocatedCourses->where('semester_id', $semester_id);

        $allocatedCourseIds = $allocatedCourses->pluck('course.id')->toArray();


        foreach ($selectedCourses as $selectedCourse) {
            $course = Course::with('prerequisites')->find($selectedCourse);

            // Check if prerequisites are met
            foreach ($course->prerequisites as $prerequisite) {
                if (!in_array($prerequisite->id, $allocatedCourseIds)) {
                    return back()->withErrors([
                        'prerequisites' => "The course '{$course->name}' cannot be allocated because its prerequisite '{$prerequisite->name}' has not been allocated.",
                    ]);
                }
            }
        }

        $currentSemEtcs = 0;
        foreach ($currentSemesterAllocations as $currentSemesterAllocation) {
            $currentSemEtcs += $currentSemesterAllocation->course->ETCS;
        }
        foreach ($selectedCourses as $selectedCourse) {
            $course = Course::find($selectedCourse);
            $currentSemEtcs += $course->ETCS;
        }
        if ($currentSemEtcs > 45) {
            return back()->withErrors([
                'ETCS' => "The total ETCS of the current semester can not exceeds 20",
            ]);
        }



        foreach ($selectedCourses as $selectedCourse) {
            BatchCourseSemester::create([
                'batch_id' => $batch_id,
                'semester_id' => $semester_id,
                'course_id' => $selectedCourse
            ]);
        }



        return redirect()->route('departmentHead.allocation.show_courses', ['batch_id' => $batch_id, 'semester_id' => $semester_id])->with('success', 'Course Allocated Successfully');
    }

    public function removeCourseAllocation(Request $request)
    {
        // dd($request->all());
        $batch_id = $request->input('batch_id');
        $course_id = $request->input('course_id');
        $semester_id = $request->input('semester_id');

        $batch = Batch::find($batch_id);

        $batch->courses()->wherePivot('semester_id', $semester_id)->detach($course_id);

        // Optionally, you can send a success message
        return redirect()->route('departmentHead.allocation.show_courses', [
            'batch_id' => $batch->id,
            'semester_id' => $semester_id,
        ])->with('success', 'Course removed successfully.');
    }

    public function getSemesters(AcademicYear $academicYear)
    {
        return response()->json($academicYear->semesters);
    }
}
