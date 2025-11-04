<!DOCTYPE html>
<html>

<!-- Version:: 1&&2  -->
<!-- <head>
    <title>Hello Page</title>
</head> -->
<body>

    <!-- Version::1 -->
    <!-- <h1>Hello world.. I'm here!</h1>
    <p>Welcome to my first Laravel view.</p> -->


    <!-- Version::2 -->
    <!-- <h1>Hello world.. I'm here!</h1>
    <p>Welcome, {{ $name }}!</p> -->



     <!-- Version::3-->
    @extends('layouts.app')

    @section('title', 'Hello this Page')

    @section('content')
        <h1>Hello world.. I'm here!</h1>
        <p>Welcome, {{ $name }}!</p>
    @endsection




    

</body>
</html>
