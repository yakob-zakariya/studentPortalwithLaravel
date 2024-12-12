<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;
use App\Models\Teacher;
use App\Models\User;

class TeacherController extends Controller
{

    public function index()
    {
        $teachers = Teacher::all();
        foreach ($teachers as $teacher) {
            $teacher->load('user');
        }
        return Inertia::render('Admin/Teacher/Index', ['teachers' => $teachers]);
    }

    public function create()
    {
        return Inertia::render('Admin/Teacher/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'first_name' => ['required', 'string'],
            'middle_name' => ['required', 'string'],
            'last_name' => ['required', 'string'],
            'email' => ['required', 'email', Rule::unique('users', 'email')]
        ]);
        // dd($request->all());

        $user = User::create([
            'first_name' => $request->input('first_name'),
            'middle_name' => $request->input('middle_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'password' => 'password',
        ]);

        $teacher = Teacher::create([
            'user_id' => $user->id,
        ]);
        $user = $teacher->user;

        $user->assignRole('TEACHER');

        return redirect()->route('admin.teachers.index')->with('success', 'Teacher is Added Successfully');
    }
}
