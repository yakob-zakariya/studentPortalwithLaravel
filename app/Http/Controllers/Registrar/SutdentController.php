<?php

namespace App\Http\Controllers\Registrar;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Batch;
use Inertia\Inertia;
use Illuminate\Validation\Rule;
use App\Models\Student;
use App\Models\User;
use App\Events\UserCreatedSuccessful;

class SutdentController extends Controller
{
    public function index() {}

    public function create()
    {
        $batches = Batch::with('department')->get();

        return Inertia::render('Registrar/Student/Create', ['batches' => $batches]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => ['required', 'string', 'min:4', 'max:50'],
            'middle_name' => ['required', 'string', 'min:4', 'max:50'],
            'last_name' => ['required', 'string', 'min:4', 'max:50'],
            'batch_id' => ['required'],
            'email' => ['required', 'email', Rule::unique('users', 'email')]
        ]);

        $batch = Batch::find($request->input('batch_id'));

        $user = User::create([
            'first_name' => $request->input('first_name'),
            'middle_name' => $request->input('middle_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'password' => 'password',
        ]);

        Student::create([
            'user_id' => $user->id,
            'batch_id' => $batch->id,
            'section_id' => null,
        ]);

        $user->assignRole('STUDENT');

        UserCreatedSuccessful::dispatch($user, 'password');

        return redirect()->route('registrar.batches.edit', $batch)->with('success', "Student Succefully Added For batch $batch->name ");
    }
}
