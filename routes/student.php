<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Student\CourseRegistrationController;
use App\Http\Controllers\Student\GradeReportController;

Route::prefix('students')->middleware(['auth', 'role:STUDENT'])->name('students.')->group(function () {

    Route::get('/chooseSemester', [CourseRegistrationController::class, 'showSemesterForm'])->name('chooseSemester');

    Route::post('/chooseSemester', [CourseRegistrationController::class, 'submitSemesterForm'])->name('chooseSemester');

    Route::get('/showCoursesForRegistration/semesters/{semesterId}', [CourseRegistrationController::class, 'showCoursesForRegistration'])->name('showCoursesForRegistration');

    Route::post('/registerForcourses', [CourseRegistrationController::class, 'storeCourseRegistration'])->name('storeCourseRegistration');

    Route::get('/gradeReport', [GradeReportController::class, 'index'])->name('gradeReport');




    // api endpoint to ge semesters in an academicyear
    Route::get('/semesters/{academciYearId}', [CourseRegistrationController::class, 'getSemesters'])->name('getSemesters');
});
