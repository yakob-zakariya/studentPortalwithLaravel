<?php

namespace App\Http\Controllers\DepartmentHead;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Course;
use Inertia\Inertia;
use Illuminate\Validation\Rule;

class CourseController extends Controller
{
    public function index(Request $request)
    {


        $courses = Course::filterByName($request->input('search'))->paginate(10);

        return Inertia::render('DepartmentHead/Course/Index', ['courses' => $courses, 'search' => $request->input('search')]);
    }

    public function create()
    {
        $courses = Course::all();
        return Inertia::render('DepartmentHead/Course/Create', ['courses' => $courses]);
    }

    public function store(Request $request)
    {


        $validated = $request->validate([
            'name' => ['required', Rule::unique('courses', 'name')],
            'code' => ['required', Rule::unique('courses', 'code')],
            'credit_hour' => ['required', 'numeric', 'min:2', 'max:5'],
            'ETCS' => ['required', 'numeric', 'min:3', 'max:7'],

        ]);


        $prerequisite_ids = $request->prerequisites;

        $course = Course::create($validated);

        if (count($prerequisite_ids) > 0) {

            foreach ($prerequisite_ids as $id) {
                $course->prerequisites()->attach(Course::find($id));
            }
        }

        return redirect()->route('departmentHead.courses.index')->with('success', "Course is Added Successfully");
    }


    public function edit(Course $course)
    {
        $prerequisites_id = $course->prerequisites->pluck('id');
        $non_prerequisite_courses = Course::whereNotIn('id', $prerequisites_id)->where('id', '!=', $course->id)->get();

        // dd($non_prerequisite_courses);

        return Inertia::render('DepartmentHead/Course/Edit', ['course' => $course->load('prerequisites'), 'allCourses' => $non_prerequisite_courses]);
    }

    public function update(Request $request, Course $course)
    {
        $validated = $request->validate([
            'name' => ['required', Rule::unique('courses', 'name')->ignore($course->id)],
            'code' => ['required', Rule::unique('courses', 'code')->ignore($course->id)],
            'credit_hour' => ['required', 'numeric', 'min:2', 'max:5'],
            'ETCS' => ['required', 'numeric', 'min:3', 'max:7'],

        ]);

        $course->update($validated);
        $prerequisite_ids = $request->prerequisites;

        foreach ($prerequisite_ids as $id) {
            $course->prerequisites()->attach(Course::find($id));
        }

        return redirect()->back()->with('success', "Course is Updated Successfully");
    }

    public function detachPrerequisite(Course $course, Course $prerequisiteCourse)
    {
        $course->prerequisites()->detach($prerequisiteCourse);
        return redirect()->back()->with('success', 'Course Prerequisite Detached Successfully');
    }



    // Adding course from file

    public function addCoursesFromFile()
    {
        return Inertia::render('DepartmentHead/Course/CreateCourseFromFile');
    }

    public function storeCoursesFromFile(Request $request)
    {


        $request->validate([
            'file' => 'required|mimes:csv,txt'
        ]);

        // dd($request->file('file'));


        $file = $request->file('file');

        $file_path = $file->getRealPath();

        $data = array_map('str_getcsv', file($file_path));

        foreach ($data as $index => $row) {
            if ($index == 0) {
                continue;
            }

            Course::create([
                'name' => $row[0],
                'code' => $row[1],
                'credit_hour' => (int) $row[2],
                'ETCS' => $row[3]
            ]);
        }




        return redirect()->route('departmentHead.courses.index')->with('success', 'Course Uploaded  successfully');
    }
}
