<?php


return [

    'paths' => ['api/*', 'sanctum/csrf-cookie', 'build/*','/login', '/register'],

    'allowed_methods' => ['*'],

    'allowed_origins' => [
        // 'http://localhost:5173',  // MUST include http://
        '*',
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,  // required for cookies and CSRF
];



// return [
//     'paths' => ['api/*', 'sanctum/csrf-cookie'],
//     'allowed_methods' => ['*'],
//     'allowed_origins' => ['http://localhost:5173'],
//     'allowed_origins_patterns' => [],
//     'allowed_headers' => ['*'],
//     'exposed_headers' => [],
//     'max_age' => 0,
//     'supports_credentials' => true,
// ];


