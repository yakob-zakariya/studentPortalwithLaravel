<?php

// Database/Seeders/StudentSeeder.php
namespace Database\Seeders;

use App\Models\Department;
use App\Models\Batch;
use App\Models\Section;
use App\Models\User;
use App\Models\Student;
use Illuminate\Database\Seeder;

class StudentSeeder extends Seeder
{
    public function run()
    {
        // Loop through all departments
        $departments = Department::all();

        foreach ($departments as $department) {
            // Loop through batches of the department
            $batches = $department->batches;

            foreach ($batches as $batch) {
                // Loop through sections in each batch
                $sections = $batch->sections;

                foreach ($sections as $section) {
                    // Create students for each section
                    for ($i = 1; $i <= 10; $i++) { // Create 10 students for each section
                        // Create a user (student)
                        $user = User::create([
                            'first_name' => 'Student' . $i,
                            'middle_name' => 'Middle' . $i,
                            'last_name' => 'Name' . $i,
                            'email' => 'student' . $batch->id . $section->id . $i . "@example.com",
                            'password' => bcrypt('password'),
                        ]);

                        // Link user to student
                        Student::create([
                            'user_id' => $user->id,
                            'batch_id' => $batch->id,
                            'section_id' => $section->id,
                        ]);
                    }
                }
            }
        }
    }
}
