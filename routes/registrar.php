<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Registrar\BatchController;
use App\Http\Controllers\Registrar\AcademicYearController;
use App\Http\Controllers\Registrar\SemesterController;
use App\Models\Semester;
use App\Http\Controllers\Registrar\SutdentController;
use App\Http\Controllers\Registrar\SemesterGradeCalculation;

Route::prefix('registrar')->name('registrar.')->middleware(['auth', 'role:REGISTRAR'])->group(function () {

    Route::get('/batches', [BatchController::class, 'index'])->name('batches.index');

    Route::get('/batches/create', [BatchController::class, 'create'])->name('batches.create');

    Route::post('/batches', [BatchController::class, 'store'])->name('batches.store');

    Route::get('/batches/{batch}/edit', [BatchController::class, 'edit'])->name('batches.edit');


    Route::put('/batches/{batch}/update', [BatchController::class, 'update'])->name('batches.update');


    // academic Year
    Route::resource('academicYears', AcademicYearController::class);

    // semester
    // Route::resource('semesters',SemesterController::class);

    Route::get('/semesters/{semester}/edit', [SemesterController::class, 'edit'])->name('semesters.edit');

    Route::get('/academicYears/{academicYear}/semesters/create', [SemesterController::class, 'create'])->name('semesters.create');

    Route::post('/academicYear/{academicYear}/semesters', [SemesterController::class, 'store'])->name('semesters.store');

    Route::get('/academicYears/{academicYear}/semesters/{semester}/edit', [SemesterController::class, 'edit'])->name('semesters.edit');

    Route::put('/academicYear/{academicYear}/semesters/{semester}', [SemesterController::class, 'update'])->name('semesters.update');



    // students

    Route::get('/students/create', [SutdentController::class, 'create'])->name('students.create');


    Route::post('/students', [SutdentController::class, 'store'])->name('students.store');




    // routes to calculate semester grades

    Route::get('/semester-grades/chooseSemester', [SemesterGradeCalculation::class, 'chooseSemester'])->name('semester-grades.chooseSemester');

    Route::post('/calculate-grade', [SemesterGradeCalculation::class, 'calculateGrade'])->name('semester-grades.calculateGrade');

    // routes to calculate semester grades for a sinlgle student

    Route::get('/semester-grades/chooseSemesterForStudent', [SemesterGradeCalculation::class, 'chooseSemesterForStudent'])->name('semester-grades.chooseSemesterForStudent');

    Route::post('/calculate-grade-for-student', [SemesterGradeCalculation::class, 'calculateSemesterGradeFoStudent'])->name('semester-grades.calculateGradeForStudent');

    // api end point to get semesters for a given academic year

    Route::get('/academicYears/{academicYear}/semesters', function () {
        $semesters = Semester::where('academic_year_id', request()->academicYear)->get();
        return response()->json($semesters);
    })->name('getSemesters');
});
