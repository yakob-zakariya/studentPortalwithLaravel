<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Models\DepartmentHead;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Role;
use App\Models\User;
use Illuminate\Validation\Rule;


class DepartmentHeadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() : Response
    {

        $filters = Request::only('search', 'trashed');

        // Query users with the 'REGISTRAR' role and apply filters
        $users = Role::where('name', 'DEPARTMENTHEAD')->first()->users()
            ->orderBy('created_at', 'desc')
            ->filter($filters) // Apply the custom filter scope
            ->get() // Retrieve all matching results without pagination
            ->transform(fn ($user) => [
                'id' => $user->id,
                'first_name' => $user->first_name,
                'middle_name' => $user->middle_name,
                'last_name' => $user->last_name,
                'email' => $user->email,
                'department'=>$user->departmentHead->department->name,
                'deleted_at' => $user->deleted_at,
            ]);
        return Inertia::render('Admin/DepartmentHeads/Index', [
            'users' => $users,
            'filters' => $filters, // Pass filters back to the frontend for use in the UI
    ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $departments = Department::all()->map->only('id','name','code');
        return Inertia::render('Admin/DepartmentHeads/Create',['departments'=>$departments]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        Request::validate([
            'first_name' => ['required', 'max:50'],
            'middle_name'=>['required','max:50'],
            'last_name' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email', Rule::unique('users')],
            'department_id'=>['required']

        ]);

        $user = User::create([
            'first_name' => Request::get('first_name'),
            'middle_name'=>Request::get('middle_name'),
            'last_name' => Request::get('last_name'),
            'email' => Request::get('email'),
            'password' => 'password',
        ]);
        $user->assignRole("DEPARTMENTHEAD");

        DepartmentHead::create([
            'user_id'=>$user->id,
            'department_id'=>Request::get('department_id')
        ]);




        return redirect()->route('admin.departmentHeads.index')->with('success', "Departmeant Head added successfully");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {

        $user = User::withTrashed()->find($id);
        // dd($user);
        return Inertia::render('Admin/DepartmentHeads/Edit',['user'=>$user]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(string $id)
    {
        $user = User::withTrashed()->find($id);
        Request::validate([
            'first_name' => ['required', 'max:50'],
            'middle_name'=>['required', 'max:50'],
            'last_name' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email', Rule::unique('users')->ignore($user->id)],

        ]);

        $user->update(Request::only('first_name','middle_name', 'last_name', 'email'));

        return redirect()->back()->with('success', 'Department Head User updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);
        $user->delete();
        return redirect()->back()->with('success','Department Head Deleted');
    }

    public function restore(string $id)
    {
        $user = User::withTrashed()->find($id);
        $user->restore();
        return redirect()->back()->with('success','Department head user restored');
    }


}
