<?php

namespace App\Http\Controllers;

use App\Models\SemesterRegistration;
use App\Models\Registration;
use Illuminate\Http\Request;

class SemesterRegistrationController extends Controller
{
    /**
     * Calculate GPA and update CGPA for a student for a specific semester.
     */
    public function calculateGpaAndCgpa($studentId, $semesterId)
    {
        // Step 1: Get all course registrations with assessments for the semester
        $registrations = Registration::where('student_id', $studentId)
            ->where('semester_id', $semesterId)
            ->with(['course', 'assessment'])
            ->get();

        if ($registrations->isEmpty()) {
            return response()->json(['error' => 'No registrations found for this semester'], 404);
        }

        // Step 2: Calculate total grade points and total ETCS for the semester
        $totalGradePoints = 0;
        $totalEtcs = 0;

        foreach ($registrations as $registration) {
            $grade = $registration->assessment->grade ?? null; // Skip if no grade
            $etcs = $registration->course->ETCS;

            if ($grade === null) {
                // continue; // Skip courses without grades
                return response()->json(['error' => 'The Grade for all course is not submitted'], 400);
            }

            $gradePoint = match ($grade) {
                'A' => 4,
                'B' => 3,
                'C' => 2,
                'D' => 1,
                default => 0,
            };

            $totalGradePoints += $gradePoint * $etcs;
            $totalEtcs += $etcs;
        }

        if ($totalEtcs === 0) {
            return response()->json(['error' => 'No valid grades found for this semester'], 400);
        }

        // Calculate semester GPA
        $semesterGpa = $totalGradePoints / $totalEtcs;

        $semesterGpa = floor($semesterGpa * 100) / 100;


        // Step 3: Fetch the last semester registration for cumulative data
        $lastSemester = SemesterRegistration::where('student_id', $studentId)
            ->where('semester_id', '<', $semesterId)
            ->orderBy('semester_id', 'desc')
            ->first();

        $cumulativeEtcs = $lastSemester->cumulative_etcs ?? 0;
        $cumulativeGradePoints = $lastSemester->cumulative_grade_points ?? 0;

        // Step 4: Calculate new cumulative values
        $newCumulativeEtcs = $cumulativeEtcs + $totalEtcs;
        $newCumulativeGradePoints = $cumulativeGradePoints + $totalGradePoints;
        $newCgpa = $newCumulativeEtcs > 0 ? $newCumulativeGradePoints / $newCumulativeEtcs : 0;

        $newCgpa = floor($newCgpa * 100) / 100;

        // Step 5: Update or create the semester registration record
        $semesterRegistration = SemesterRegistration::updateOrCreate(
            ['student_id' => $studentId, 'semester_id' => $semesterId],
            [
                'total_etcs' => $totalEtcs,
                'grade_points' => $totalGradePoints, // Store grade points for the semester
                'semester_gpa' => $semesterGpa,
                'cumulative_etcs' => $newCumulativeEtcs,
                'cumulative_grade_points' => $newCumulativeGradePoints,
                'cumulative_gpa' => $newCgpa,
                'status' => 'Promoted',
            ]
        );

        return response()->json([
            'message' => 'GPA and CGPA updated successfully.',
            'semester_registration' => $semesterRegistration,
        ]);
    }
}
