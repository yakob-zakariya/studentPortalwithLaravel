<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Registration;

class GradeReportController extends Controller
{
    public function index(Request $request)
    {
        $student = $request->user()->student;

        // $registrations = Registration::where('student_id', $student->id)->has('assessment')->with(['course', 'assessment', 'semester.academicYear', 'semester.semesterRegistrations'])->get();

        // $registrations = Registration::where('student_id', $student->id)
        //     ->has('assessment')
        //     ->with(['course', 'assessment', 'semester.academicYear', 'semester.semesterRegistrations'])
        //     ->orderBy('created_at', 'desc') // Order by latest creation date
        //     ->get();

        // $registrations = Registration::where('student_id', $student->id)
        //     ->has('assessment')
        //     ->with(['course', 'assessment', 'semester.academicYear', 'semester.semesterRegistrations'])
        //     ->orderBy('semester_id', 'desc') // Order by the latest semester
        //     ->get();

        // $registrations = Registration::where('student_id', $student->id)
        //     ->has('assessment')
        //     ->with(['course', 'assessment', 'semester.academicYear', 'semester.semesterRegistrations'])
        //     ->where('semester.semesterRegistrations.student_id', $student->id)
        //     ->get();

        $registrations = Registration::where('student_id', $student->id)
            ->has('assessment')
            ->with([
                'course',
                'assessment',
                'semester.academicYear',
                'semester.semesterRegistrations' => function ($query) use ($student) {
                    $query->where('student_id', $student->id);
                }
            ])
            ->get();



        // $registrations = Registration::where('student_id', $student->id)
        //     ->has('assessment')
        //     ->join('semesters', 'registrations.semester_id', '=', 'semesters.id') // Join semesters
        //     ->with(['course', 'assessment', 'semester.academicYear', 'semester.semesterRegistrations'])
        //     ->orderByDesc('semesters.id') // Replace `start_date` with the desired column
        //     ->select('registrations.*') // Select only registration fields
        //     ->get();




        $groupedBySemester = $registrations->groupBy('semester_id');





        return Inertia::render('Student/GradeReport/TotalGradeReport', [
            'registrations' => $registrations,
            'groupedRegistrations' => $groupedBySemester,
        ]);
    }
}
