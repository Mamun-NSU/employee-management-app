<!DOCTYPE html>
<html>
<head>
    <title>@yield('title')</title>
</head>
<body>
    <header>
        <h2>My Laravel App</h2>
        <hr>
    </header>

    <main>
        @yield('title')
        @yield('content')
    </main>

    <footer>
        <hr>
        <p>&copy; 2025 My App</p>
    </footer>
</body>
</html>
