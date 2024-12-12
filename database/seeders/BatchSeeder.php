<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Department;
use App\Models\Batch;

class BatchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $departments = Department::all();

        foreach ($departments as $department) {
            for ($i = 1; $i <= 4; $i++) {
                Batch::create([
                    'department_id' => $department->id,
                    'name' => "Year $i",

                ]);
            }
        }
    }
}
