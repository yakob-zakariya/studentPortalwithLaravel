<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
// use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Request;
use App\Models\User;
use Illuminate\Validation\Rule;

class RegistrarController extends Controller
{
    public function index()
    {
        // Capture only the needed filters from the request
        $filters = Request::only('search', 'trashed');

        // Query users with the 'REGISTRAR' role and apply filters
        $users = Role::where('name', 'REGISTRAR')->first()->users()
            ->orderBy('created_at', 'desc')
            ->filter($filters) // Apply the custom filter scope
            ->get() // Retrieve all matching results without pagination
            ->transform(fn ($user) => [
                'id' => $user->id,
                'first_name' => $user->first_name,
                'middle_name' => $user->middle_name,
                'last_name' => $user->last_name,
                'email' => $user->email,
                'deleted_at' => $user->deleted_at,
            ]);
        return inertia('Admin/Registrars/Index', [
            'users' => $users,
            'filters' => $filters, // Pass filters back to the frontend for use in the UI
    ]);

    }

    public function create()
    {
        return inertia('Admin/Registrars/Create');
    }

    public function store()
    {

        Request::validate([
            'first_name' => ['required', 'max:50'],
            'middle_name'=>['required','max:50'],
            'last_name' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email', Rule::unique('users')],

        ]);

        $user = User::create([
            'first_name' => Request::get('first_name'),
            'middle_name'=>Request::get('middle_name'),
            'last_name' => Request::get('last_name'),
            'email' => Request::get('email'),
            'password' => 'password',
        ]);

        $user->assignRole('REGISTRAR');

        return redirect()->route('admin.registrars')->with('success', 'Registrar User created.');
    }

    public function edit(User $user)
    {
        return inertia('Admin/Registrars/Edit', [
            'user' => [
                'id' => $user->id,
                'first_name' => $user->first_name,
                'middle_name'=>$user->middle_name,
                'last_name' => $user->last_name,
                'email' => $user->email,
                'deleted_at'=>$user->deleted_at


            ],
        ]);

    }

    public function update(User $user)
    {
        Request::validate([
            'first_name' => ['required', 'max:50'],
            'middle_name'=>['required', 'max:50'],
            'last_name' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email', Rule::unique('users')->ignore($user->id)],

        ]);

        $user->update(Request::only('first_name','middle_name', 'last_name', 'email'));

        return redirect()->back()->with('success', 'Registrar User updated.');
    }

    public function destroy(User $user)
    {
        $user->delete();
        return redirect()->back()->with('success','Registrar user is deleted');
    }

    public function restore(User $user)
    {
        $user->restore();
        return redirect()->back()->with('success','Registrar user Restored');
    }
}
