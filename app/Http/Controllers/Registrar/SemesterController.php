<?php

namespace App\Http\Controllers\Registrar;

use App\Http\Controllers\Controller;
use App\Models\AcademicYear;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;
use App\Models\Semester;
use App\Rules\IsCompositeUnique;


class SemesterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(AcademicYear $academicYear)
    {
        $semesters = $academicYear->semesters;
        return Inertia::render('Registrars/Semesters/Index',['semesters'=>$semesters,'academicYear'=>$academicYear]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(AcademicYear $academicYear)
    {
        return Inertia::render('Registrar/Semester/Create',['academicYear'=>$academicYear]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request,AcademicYear $academicYear)
    {
        // dd($academicYear->id);
        $request->validate([
            'name' => [
                'required',
                new IsCompositeUnique('semesters', [
                    'name' => $request->name,
                    'academic_year_id' => $academicYear->id,
                ]),
            ],
        ]);

        Semester::create([
            'name'=>$request->input('name'),
            'academic_year_id'=>$academicYear->id
        ]);

        return redirect()->route('registrar.academicYears.edit',$academicYear)->with('success','Semester is added successfully');



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
    public function edit(AcademicYear $academicYear,Semester $semester)
    {
        // dd($academicYear,$semester);
        return Inertia::render('Registrar/Semester/Edit',['semester'=>$semester,'academicYear'=>$academicYear]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, AcademicYear $academicYear,Semester $semester)
    {
        $request->validate([
            'name'=>['required',new IsCompositeUnique('semesters',['academic_year_id'=>$academicYear->id,'name'=>$request->input('name')],$semester->id)]
        ]);

        $semester->update($request->only('name'));

        return redirect()->back()->with('success', "Semester Updated Successfully");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
