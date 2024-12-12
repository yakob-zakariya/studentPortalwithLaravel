<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DepartmentHead\CourseController;
use App\Http\Controllers\DepartmentHead\CourseAllocationController;
use App\Http\Controllers\DepartmentHead\SectionController;
use App\Http\Controllers\DepartmentHead\BatchController;
use App\Http\Controllers\DepartmentHead\StudentController;
use App\Http\Controllers\DepartmentHead\StudentExportController;
use App\Http\Controllers\DepartmentHead\TeacherAssignmentController;

Route::prefix('departmentHead')->name('departmentHead.')->middleware(['auth', 'role:DEPARTMENTHEAD'])->group(function () {


    // courses route

    Route::get('/courses', [CourseController::class, 'index'])->name('courses.index');


    Route::get('/courses/create', [CourseController::class, 'create'])->name('courses.create');

    Route::post('/courses', [CourseController::class, 'store'])->name('courses.store');


    Route::get('/courses/{course}/edit', [CourseController::class, 'edit'])->name('courses.edit');

    Route::put('/courses/{course}', [CourseController::class, 'update'])->name('courses.update');

    // adding course from the file

    Route::get('/courses/addFromFile', [CourseController::class, 'addCoursesFromFile'])->name('courses.createCourseFromFile');

    Route::post('/courses/storeFromFile', [CourseController::class, 'storeCoursesFromFile'])->name('courses.storeFromFile');

    Route::get('/courses/{course}/detachPrerequisite/{prerequisiteCourse}', [CourseController::class, 'detachPrerequisite'])->name('courses.detachPrerequisites');




    // course allocation

    Route::get('/allocation/create', [CourseAllocationController::class, 'showBatchAndSemester'])->name('allocation.create');

    Route::post('/allocation', [CourseAllocationController::class, 'submitBatchAndSemester'])->name('allocation.store');


    Route::get('/allocation/selectCourses/batches/{batch_id}/semester/{semester_id}', [CourseAllocationController::class, 'showCoursesForAllocation'])->name('allocation.show_courses');


    Route::post('allocation/selectedCourse', [CourseAllocationController::class, 'storeAllocatedCourses'])->name('allocatedCourses.store');


    Route::post('/allocation/removeCourseAllocation', [CourseAllocationController::class, 'removeCourseAllocation'])->name('allocatedCourse.remove');






    // batches

    Route::get('/batches', [BatchController::class, 'index'])->name('batches.index');

    Route::get('/batches/{batch}/edit', [BatchController::class, 'edit'])->name('batches.edit');



    Route::put('/batches/{batch}', [BatchController::class, 'update'])->name('batches.update');


    // Section routes
    Route::get('/batches/{batch}/sections/create', [SectionController::class, 'create'])->name('sections.create');

    Route::post('/batches/{batch}/section/store', [SectionController::class, 'store'])->name('sections.store');

    Route::get('/batches/sections/{section}/edit', [SectionController::class, 'edit'])->name('sections.edit');

    Route::put('batches/sections/{section}/store', [SectionController::class, 'update'])->name('sections.update');


    // student route

    Route::get('/students/{student}/edit', [StudentController::class, 'edit'])->name('students.edit');

    Route::post('/students/{student}/assignSection', [StudentController::class, 'assignSection'])->name('students.assignSection');



    // teacher assignment to a courses for specific semester for sepecifc batch

    Route::get('/assignTeacher/chooseSemester', [TeacherAssignmentController::class, 'showBatchAndSemester'])->name('teacherAssignment.create');

    Route::post('/assignTeacher', [TeacherAssignmentController::class, 'submitBatchAndSemester'])->name('teacherAssignment.store');


    // first show the courses and the user can select the course he want to assign teacher and can also select udpate if the teacher is already selected
    Route::get('/selectCourses/sections/{section}/semesters/{semester}', [TeacherAssignmentController::class, 'showCoursesForAssignment'])->name('selectCourses.sections.semesters');

    // when the form is submited the user is redirected to the teacher selection page passing the section,semester and course
    Route::post('/selectCourse/courseAllocations/{allocation_id}', [TeacherAssignmentController::class, 'selectCourseForTeacherAssignment'])->name('selectCourse.courses');


    // get the section,semester and courses from the above method and display a teacher selction form
    Route::get('/selectTeacher/courseAllocations/{allocation_id}/sections/{section_id}', [TeacherAssignmentController::class, 'selectTeacherForAssignment'])->name('selectTeacher.sections.semesters.courses');

    // finally the teacher is selcted and stored to the database
    Route::post('/storeSelectedCourses', [TeacherAssignmentController::class, 'storeSelectedTeacher'])->name('storeSelectedTeacher');

    // Teacher assignment Update

    // first get the form from the above page that show courses and the user can select to assign a teacher or update it

    Route::post('/selectCourse/teacherAssignmentUpdate', [TeacherAssignmentController::class, 'selectCourseForTeacherAssignmentUpdate'])->name('selectCourse.teacherAssignmentUpdate');


    // this show the teacher selection edit page but by filling the already accepted teacher
    Route::get('/selectTeacher/courseAllocation/{assignment_id}', [TeacherAssignmentController::class, 'selectTeacherForAssignmentUpdate'])->name('selectTeacherForAssignmentUpdate');

    // finally update the data and save

    Route::put('/updateCourseAssignedTeacher/{assignment_id}', [TeacherAssignmentController::class, 'storeSelectedTeacherUpdate'])->name('storeUpdatedSelectTeacher');






    // get semster by academic year (api)
    Route::get('/academicYears/{academicYear}/semesters', [CourseAllocationController::class, 'getSemesters'])->name('academicYear.semesters');

    //get sections by batch (api)

    Route::get('/batches/{batch}/sections', [TeacherAssignmentController::class, 'getSections'])->name('batch.sections');



    // export studnes to xlsx file
    Route::get('/batch/{batch}/students', [StudentExportController::class, 'exportBatchStudents'])->name('export.batch_students');
});
