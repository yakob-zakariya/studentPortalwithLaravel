<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Department;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use Inertia\Response;

class DepartmentController extends Controller
{
    public function index() : Response
    {
        $departments = Department::all();
        return Inertia::render('Admin/Departments/Index',['departments'=>$departments]);
    }

    public function create() : Response
    {
        return Inertia::render('Admin/Departments/Create');
    }

    public function store() : RedirectResponse
    {
        $validated = Request::validate([
            'name'=>['required','min:5','max:100'],
            'code'=>['required','min:2','max:5']
        ]);
        Department::create($validated);

        return redirect()->route('admin.departments')->with('success','Department Added Successfully');
    }

    public function edit(Department $department) : Response
    {
        return Inertia::render('Admin/Departments/Edit',[
            'department'=>[
                'id'=>$department->id,
                'name'=>$department->name,
                'code'=>$department->code,
                'departmentHead'=>$department->departmentHead? $department->departmentHead->user : null,
            ]
            ]);
    }

    public function update(Department $department) : RedirectResponse
    {
        $validated = Request::validate([
            'name'=>['required','min:5','max:100'],
            'code'=>['required','min:2','max:5']
        ]);

        $department->update(Request::only('name','code'));
        return redirect()->back()->with('success','Department Updated Successfully');

    }


}
