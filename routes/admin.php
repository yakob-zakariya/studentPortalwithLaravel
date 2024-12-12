<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\DepartmentController;
use App\Http\Controllers\Admin\DepartmentHeadController;
use App\Http\Controllers\Admin\RegistrarController;
use App\Http\Controllers\Admin\TeacherController;

Route::prefix('admin')->name('admin.')->middleware(['auth','role:ADMIN'])->group(function(){

    // Registrar Users

    Route::get('/registrars',[RegistrarController::class,'index'])->name('registrars');

    Route::get('/registrars/create',[RegistrarController::class,'create'])->name('registrars.create');

    Route::post('/registrars',[RegistrarController::class,'store'])->name('registrars.store');

    Route::get('/registrars/{user}/edit',[RegistrarController::class,'edit'])->name('registrars.edit');

    Route::put('registrars/{user}',[RegistrarController::class,'update'])->name('registrars.update');

    Route::delete('registrars/{user}',[RegistrarController::class,'destroy'])->name('registrars.destroy');

    Route::put('registrars/{user}/restore',[RegistrarController::class,'restore'])->name('registrars.restore');

    // Department

    Route::get('/departments',[DepartmentController::class,'index'])->name('departments');

    Route::get('/departments/create',[DepartmentController::class,'create'])->name('departments.create');

    Route::post('/departments',[DepartmentController::class,'store'])->name('departments.store');

    Route::get('/departments/{department}/edit',[DepartmentController::class,'edit'])->name('departments.edit');

    Route::put('/departments/{department}/update',[DepartmentController::class,'update'])->name('departments.update');

    // departmentHeads

    Route::resource('departmentHeads',DepartmentHeadController::class);

    Route::put('/departmentHeads/{user}/restore',[DepartmentHeadController::class,'restore'])->name('departmentHeads.restore');


    // teachers

    Route::get('/teachers',[TeacherController::class,'index'])->name('teachers.index');

    Route::get('/teachers/create',[TeacherController::class,'create'])->name('teachers.create');

    Route::post('/teachers',[TeacherController::class,'store'])->name('teachers.store');



});

// Route::get('users', [UsersController::class, 'index'])
//     ->name('users')
//     ->middleware('auth');

// Route::get('users/create', [UsersController::class, 'create'])
//     ->name('users.create')
//     ->middleware('auth');

// Route::post('users', [UsersController::class, 'store'])
//     ->name('users.store')
//     ->middleware('auth');

// Route::get('users/{user}/edit', [UsersController::class, 'edit'])
//     ->name('users.edit')
//     ->middleware('auth');

// Route::put('users/{user}', [UsersController::class, 'update'])
//     ->name('users.update')
//     ->middleware('auth');

// Route::delete('users/{user}', [UsersController::class, 'destroy'])
//     ->name('users.destroy')
//     ->middleware('auth');

// Route::put('users/{user}/restore', [UsersController::class, 'restore'])
//     ->name('users.restore')
//     ->middleware('auth');
