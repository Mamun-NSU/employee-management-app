<?php


namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    // List all employees
    public function index()
    {
        $employees = Employee::all();
        return response()->json($employees);
    }

    // Store new employee
    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:50',
            'last_name' => 'required|string|max:50',
            'designation' => 'required|string|max:100',
            // 'phone_number' => 'nullable|string|max:20',
            'phone_number' => 'nullable|string|max:20|unique:employees,phone_number',
            'email' => 'required|email|unique:employees,email',
            'nationality' => 'nullable|string|max:50',
            'address' => 'nullable|string',
        ]);

        $employee = Employee::create($request->all());
        return response()->json($employee, 201);
    }

    // Show single employee
    public function show($id)
    {
        $employee = Employee::find($id);
        if (!$employee) {
            return response()->json(['message' => 'Employee not found'], 404);
        }
        return response()->json($employee);
    }

}

