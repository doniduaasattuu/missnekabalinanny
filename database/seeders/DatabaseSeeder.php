<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $defaultPassword = config('app.default_password', 'password');
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Neka Kharisma',
            'email' => 'neka@gmail.com',
            'password' => bcrypt($defaultPassword),
            'email_verified_at' => now(),
        ]);

        $this->call([
            LandingPageSeeder::class,
        ]);
    }
}
