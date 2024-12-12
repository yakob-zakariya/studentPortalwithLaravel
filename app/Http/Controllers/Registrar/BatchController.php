<?php

namespace App\Http\Controllers\Registrar;

use App\Http\Controllers\Controller;
use App\Models\Batch;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request;
use App\Models\Department;
use App\Rules\IsCompositeUnique;
use Illuminate\Validation\Rule;

class BatchController extends Controller
{
    public function index()
    {
        $batches = Batch::with('department')->get();

        return Inertia::render('Registrar/Batch/Index',['batches'=>$batches]);
    }

    public function create()
    {
        $departments = Department::all();
        return Inertia::render('Registrar/Batch/Create',[
            'departments'=>$departments
        ]);
    }

    public function store()
{
    $validated = Request::validate([
        'name' => [
            'required',
            new IsCompositeUnique('batches',[
                'name'=>Request::input('name'),
                'department_id'=>Request::input('department_id')
            ])
        ],
        'department_id' => ['required', 'exists:departments,id'],
    ]);

    Batch::create($validated);

    return redirect()->route('registrar.batches.index')->with('success', 'Batch Added Successfully');
}

    public function edit(Batch $batch)
    {
        $students = $batch->students;

        foreach($students as $student){
            $student->load('user');
        }
        return Inertia::render('Registrar/Batch/Edit',['batch'=>$batch->load('department'),'departments'=>Department::all(),'students'=>$students]);
    }


    public function update(Batch $batch)
    {

        // dd($batch->id,$batch->name,$batch->department->name);

        $validated = Request::validate([
            'name'=>[
                'required',
                new IsCompositeUnique('batches',[
                    'name'=>Request::input('name'),
                    'department_id' => Request::input('department_id'),

                ],$batch->id,)
            ],
            'department_id'=>['required','exists:departments,id'],
            'year'=>['required','string'],

        ]);


        $batch->update($validated);

        return redirect()->back()->with('success','Batch Updated Successfully');
    }
}
