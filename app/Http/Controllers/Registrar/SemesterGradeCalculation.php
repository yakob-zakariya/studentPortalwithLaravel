<?php

namespace App\Http\Controllers\Registrar;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\AcademicYear;
use App\Jobs\CalculateGPA;
use App\Models\User;


class SemesterGradeCalculation extends Controller
{

    public function chooseSemester()
    {
        $academicYears = AcademicYear::all();
        return Inertia::render('Registrar/GradeCalculation/ChooseSemester', [
            'academicYears' => $academicYears
        ]);
    }

    public function calculateGrade(Request $request)
    {
        $request->validate([
            'academicYear_id' => 'required',
            'semester_id' => 'required'
        ]);

        $semesterId = $request->semester_id;

        CalculateGPA::dispatch($semesterId);

        return redirect()->route('home')->with('success', 'Grade calculation has been initiated');





        return redirect()->route('registrar.semester-grades.chooseSemester');
    }


    // calculate semester grade for student
    public function chooseSemesterForStudent()
    {
        $academicYears = AcademicYear::all();
        return Inertia::render('Registrar/GradeCalculation/ChooseSemesterAndUser', [
            'academicYears' => $academicYears
        ]);
    }

    public function calculateSemesterGradeFoStudent(Request $request)
    {
        $request->validate([
            'semester_id' => ['required'],
            'academicYear_id' => ['required'],
            'email' => ['required', 'email', 'exists:users']
        ]);

        $semesterId = $request->semester_id;
        $email = $request->email;
        $user = User::where('email', $email)->first();
        $student = $user->student;

        CalculateGPA::dispatch($semesterId, $student->id);
        return redirect()->route('home')->with('success', 'Grade calculation has been initiated');
        // dd($request->all());
    }
}
