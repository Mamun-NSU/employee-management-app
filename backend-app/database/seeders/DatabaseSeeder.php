<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Employee;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::firstOrCreate([
            'id'       => 1,
            'name'     => 'Test User',
            'email'    => 'test@example.com',
            'password' => bcrypt('pass123.')
        ]);

        Employee::factory(100)->create();
    }
}


