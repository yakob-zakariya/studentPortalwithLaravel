<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ImagesController;
use App\Http\Controllers\OrganizationsController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\UserExportController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Auth

use App\Mail\UserCreated;
use App\Models\User;
use Illuminate\Support\Facades\Mail;

Route::get('/test', function () {
    $user = User::find(1);


    Mail::to('yakob@gmail.com')->send(new UserCreated($user, 'password'));

    return 'email is sent successfully';
});
Route::get('login', [AuthenticatedSessionController::class, 'create'])
    ->name('login')
    ->middleware('guest');

Route::post('login', [AuthenticatedSessionController::class, 'store'])
    ->name('login.store')
    ->middleware('guest');

Route::delete('logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout');

// Dashboard

Route::get('/', [DashboardController::class, 'index'])
    ->name('home')
    ->middleware('auth');

// routes by users roles
require __DIR__ . '/admin.php';

// routes by registrar roles
require __DIR__ . '/registrar.php';

// routes by department Heads

require __DIR__ . '/departmentHead.php';
require __DIR__ . '/teacher.php';

require __DIR__ . '/student.php';


// route to download users xlsx file just trial

Route::get('users/export', [UserExportController::class, 'export']);
