<?php 


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HelloController;
use App\Http\Controllers\EmployeeController;

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Http\Request;


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



// Register (skip CSRF)
Route::post('/register', [RegisteredUserController::class, 'store'])
    ->withoutMiddleware([\Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::class]);

// Login (skip CSRF)
Route::post('/login', [AuthenticatedSessionController::class, 'store'])
    ->withoutMiddleware([\Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::class]);

// Logout (requires authentication)
Route::middleware('auth:sanctum')->post('/logout', [AuthenticatedSessionController::class, 'destroy']);

// Get current authenticated user
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// // Register
// Route::post('/register', [RegisteredUserController::class, 'store']);

// // Login
// Route::post('/login', [AuthenticatedSessionController::class, 'store']);

// // Logout
// Route::middleware('auth:sanctum')->post('/logout', [AuthenticatedSessionController::class, 'destroy']);

// // Current authenticated user
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


require __DIR__.'/auth.php';


