<?php

namespace Database\Seeders;


use App\Models\User;
use Database\Factories\UserFactory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {


        // User::create([
        //     'first_name'=>'yakob',
        //     'middle_name'=>'zakariya',
        //     'last_name'=>'aman',
        //     'email'=>'yysiyzx07@gmail.com',
        //     'password'=>'password'


        // ]);
        // User::factory(3)->create();

        $this->call([
            BatchSeeder::class,
            SectionSeeder::class,
            StudentSeeder::class,
        ]);
    }
}
