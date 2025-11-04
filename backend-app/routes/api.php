
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;


// RESTful API routes for Employee
Route::apiResource('employees', EmployeeController::class);
