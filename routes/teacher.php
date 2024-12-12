<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Teacher\TeacherStudentController;

Route::prefix('teachers')->middleware(['auth', 'role:TEACHER'])->name('teachers.')->group(function () {

    Route::get('/chooseSemester', [TeacherStudentController::class, 'chooseSemester'])->name('chooseSemester');

    Route::post('/chooseSemester', [TeacherStudentController::class, 'submitSemester'])->name('chooseSemester');

    Route::get('/allocatedCourses/semesters/{semesterId}', [TeacherStudentController::class, 'showAllocatedCourses'])->name('allocatedCourses');

    Route::get('/registeredStudents/course/{courseId}/section/{sectionId}/semester/{semesterId}', [TeacherStudentController::class, 'showRegisteredStudents'])->name('registeredStudents');


    Route::get('/fillMarks/{registrationId}', [TeacherStudentController::class, 'fillMarks'])->name('fillMarks');

    Route::post('/fillMarks/{registrationId}', [TeacherStudentController::class, 'submitMarks'])->name('submitMarks');

    Route::get('getSemesters/{academicYearId}', [TeacherStudentController::class, 'getSemesters'])->name('getSemesters');
});
