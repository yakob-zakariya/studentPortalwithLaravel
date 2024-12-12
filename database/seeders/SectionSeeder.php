<?php

namespace Database\Seeders;

use App\Models\Batch;
use App\Models\Section;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Department;


class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $batches = Batch::all();

        foreach ($batches as $batch) {
            for ($i = 1; $i <= 3; $i++) {
                Section::create([
                    'batch_id' => $batch->id,
                    'name' => "Section $i",
                ]);
            }
        }
    }
}
