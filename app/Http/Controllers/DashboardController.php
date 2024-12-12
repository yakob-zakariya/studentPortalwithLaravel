<?php

namespace App\Http\Controllers;


use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request): Response
    {

        $role = $request->user()->roles()->first();
        if ($role->name == "ADMIN") {
            return Inertia::render('Admin/Index');
        } elseif ($role->name == "REGISTRAR") {
            return Inertia::render('Registrar/Index');
        } elseif ($role->name == 'DEPARTMENTHEAD') {
            return Inertia::render('DepartmentHead/Index');
        } elseif ($role->name == 'TEACHER') {
            return Inertia::render('Teacher/Index');
        } elseif ($role->name == 'STUDENT') {
            return Inertia::render('Student/Index');
        }
    }
}
