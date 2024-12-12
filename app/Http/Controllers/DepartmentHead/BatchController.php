<?php

namespace App\Http\Controllers\DepartmentHead;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Batch;
use App\Rules\IsCompositeUnique;

class BatchController extends Controller
{
    public function index(Request $request)
    {
        $batches = $request->user()->departmentHead->department->batches;
        $department = $request->user()->departmentHead->department;

        return Inertia::render('DepartmentHead/Batch/Index',['batches'=>$batches,'department'=>$department]);
    }

    public function edit(Batch $batch)
    {
        // Load related department and sections for the batch
        $batch->load(['department', 'sections']);

        // Paginate students, loading `user` and `section` relationships in a single query
        $students = $batch->students()
            ->with(['user', 'section']) // Eager load relationships
            ->paginate(10); // Adjust the number of items per page as needed

        return Inertia::render('DepartmentHead/Batch/Edit', [
            'batch' => $batch,
            'students' => $students,
        ]);
    }

    public function update(Request $request, Batch $batch)
    {
        $department = $request->user()->departmentHead->department;
        $validated = $request->validate([
            'name'=>[
                'required',
                new IsCompositeUnique('batches',
                [
                'name'=>$request->input('name'),
                'department_id'=>$department->id
                ],
            $batch->id,)
            ],
            'year'=>['required','string']
            ]);

        $batch->update($validated);

        return redirect()->back()->with('success','Batch Updated Successfully');
    }
}
