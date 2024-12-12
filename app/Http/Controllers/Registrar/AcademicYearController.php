<?php

namespace App\Http\Controllers\Registrar;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AcademicYear;
use Inertia\Inertia;
use Illuminate\Validation\Rule;

class AcademicYearController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $academicYears = AcademicYear::with('semesters')->get();
        return Inertia::render('Registrar/AcademicYear/Index',['academicYears'=>$academicYears]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Registrar/AcademicYear/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'=>['required'],
        ]);
        AcademicYear::create($validated);

        return redirect()->route('registrar.academicYears.index')->with('success','Academic Year created successfully');
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
    public function edit(AcademicYear $academicYear)
    {
        $academicYear->load('semesters');
        return Inertia::render('Registrar/AcademicYear/Edit',['academicYear'=>$academicYear]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, AcademicYear $academicYear)
    {
        $request->validate([
            'name'=> ['required',Rule::unique('academic_years', 'name')->ignore($academicYear->id),]
        ]);

        $academicYear->update($request->only('name'));

        return redirect()->back()->with("success","Academic Year is Updated Successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
