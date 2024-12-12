<?php

namespace App\Http\Controllers\DepartmentHead;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Student;

class StudentController extends Controller
{
    public function edit(Request $request,Student $student)
    {
        $student->load('user');
        $student->load('batch');
        $batches = $request->user()->departmentHead->department->batches;
        foreach($batches as $batch){
            $batch->load('department');
        }

        $sections = $student->batch->sections;

        return Inertia::render('DepartmentHead/Student/Edit',[
            'batches'=>$batches,
            'student'=>$student,
            'sections'=>$sections,
        ]);
    }

    public function assignSection(Request $request,Student $student)
    {
        $request->validate([
            'section_id'=>['required']
        ]);
        $student->section_id = $request->input('section_id');
        $student->save();
        return redirect()->back()->with('success','Section Assigned Successfully');


    }
}
