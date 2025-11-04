<?php 


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HelloController;
use App\Http\Controllers\EmployeeController;


Route::get('/', [HelloController::class, 'index']);

// Employee Routes (CRUD)

Route::prefix('employees')->group(function () {

    //   GET: List all employees
    Route::get('/', [EmployeeController::class, 'index']);

    //   GET: Show a single employee
    Route::get('{id}', [EmployeeController::class, 'show']);

    //  POST: Create a new employee
    Route::post('/', [EmployeeController::class, 'store'])
        ->withoutMiddleware([\Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::class]);

    //   PUT: Update an employee
    Route::put('{id}', [EmployeeController::class, 'update'])
        ->withoutMiddleware([\Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::class]);

    //  DELETE: Delete an employee
    Route::delete('{id}', [EmployeeController::class, 'destroy'])
        ->withoutMiddleware([\Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::class]);
});









