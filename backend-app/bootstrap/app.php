<?php

use App\Http\Middleware\HandleAppearance;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {

        $middleware->api(prepend: [
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        ]);

        $middleware->alias([
            'verified' => \App\Http\Middleware\EnsureEmailIsVerified::class,
        ]);

        $middleware->encryptCookies(except: ['appearance', 'sidebar_state']);

        // // ADD THIS PART ↓↓
        // $middleware->validateCsrfTokens(except: [
        //     'api/*',                         // ignore CSRF for API routes
        //     'http://127.0.0.1:5173/*',       // React app dev URL
        //     'http://localhost:5173/*',       // (optional) if using localhost
        // ]);

        $middleware->validateCsrfTokens(except: [
            'api/*', // if you have API routes that need CSRF skipped
        ]);


        $middleware->web(append: [
            HandleAppearance::class,
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();


// use App\Http\Middleware\HandleAppearance;
// use App\Http\Middleware\HandleInertiaRequests;
// use Illuminate\Foundation\Application;
// use Illuminate\Foundation\Configuration\Exceptions;
// use Illuminate\Foundation\Configuration\Middleware;
// use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;

// return Application::configure(basePath: dirname(__DIR__))
//     ->withRouting(
//         web: __DIR__.'/../routes/web.php',
//         commands: __DIR__.'/../routes/console.php',
//         health: '/up',
//     )
//     ->withMiddleware(function (Middleware $middleware): void {
//         $middleware->api(prepend: [
//             \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
//         ]);

//         $middleware->alias([
//             'verified' => \App\Http\Middleware\EnsureEmailIsVerified::class,
//         ]);

//         $middleware->encryptCookies(except: ['appearance', 'sidebar_state']);

//         $middleware->web(append: [
//             HandleAppearance::class,
//             HandleInertiaRequests::class,
//             AddLinkHeadersForPreloadedAssets::class,
//         ]);
//     })
//     ->withExceptions(function (Exceptions $exceptions): void {
//         //
//     })->create();
