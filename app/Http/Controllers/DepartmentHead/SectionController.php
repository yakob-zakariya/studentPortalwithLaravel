<?php

namespace App\Http\Controllers\DepartmentHead;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Batch;
use App\Rules\IsCompositeUnique;
use App\Models\Section;

class SectionController extends Controller
{
    public function index()
    {

    }

    public function create(Batch $batch)
    {
        return Inertia::render('DepartmentHead/Batch/Section/Create',['batch'=>$batch]);
    }

    public function store(Request $request ,Batch $batch)
    {
        $request->validate([
            'name'=>['required',new IsCompositeUnique('sections',[
                'name'=>$request->input('name'),
                'batch_id' =>$batch->id,
            ])],
        ]);

        Section::create([
            'name'=>$request->input('name'),
            'batch_id'=>$batch->id,
        ]);

        return redirect()->route('departmentHead.batches.edit',$batch)->with('success','Section is added Successfully');

    }

    public function edit(string $section_id)
    {
        $section = Section::find($section_id);
        $students = $section->students()->with(['user','section'])->paginate(10);
        // dd($section->name);
        return Inertia::render('DepartmentHead/Batch/Section/Edit',['section'=>$section,'batch'=>$section->batch,'students'=>$students]);
    }

    public function update(Request $request,Section $section){
        // dd($section->name);
        $request->validate([
            'name'=>['required',new IsCompositeUnique('sections',
            [
                'name'=>$request->input('name'),
                'batch_id'=>$section->batch->id,
            ],$section->id
            )],
        ]);

        $section->name = $request->input('name');
        $section->save();

        return redirect()->back()->with("success","Section updated Successfully");
    }
}
