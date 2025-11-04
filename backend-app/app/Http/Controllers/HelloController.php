<?php

// namespace App\Http\Controllers;

// use Illuminate\Http\Request;

// class HelloController extends Controller
// {
   
// }




//  Version:: 01 
// namespace App\Http\Controllers;

// use Illuminate\Http\Request;

// class HelloController extends Controller
// {
//     public function index()
//     {
//         return view('hello');
//     }
// }



// Version:: 02 
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloController extends Controller
{
    public function index()
{
    $name = "Mamun";
    return view('hello', ['name' => $name]);
}
}





