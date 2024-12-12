<?php

namespace App\Exports;

use App\Models\Student;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithColumnLimit;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithHeadings;

class StudentsExport implements FromCollection, WithHeadings,WithColumnWidths
{
    protected $batchId;

    public function __construct($batchId)
    {
        $this->batchId = $batchId;
    }

    public function collection()
    {
        return Student::join('users', 'students.user_id', '=', 'users.id')
        ->join('batches', 'students.batch_id', '=', 'batches.id')
        ->join('sections', 'students.section_id', '=', 'sections.id')
        ->where('students.batch_id', $this->batchId) // Filter by dynamic batch ID
        ->select(
            DB::raw("users.first_name || ' ' || users.middle_name || ' ' || users.last_name as name"), // Concatenate name using SQLite syntax
            'users.email',
            'batches.name as batch_name',
            'sections.name as section_name'
        )
        ->get();
    }

    public function headings(): array
    {
        return [
            'Name',
            'Email',
            'Batch',
            'Section',
        ];
    }

    public function columnWidths(): array
    {
        return [
            "A"=>40,
            "B"=>30,
            "C"=>20,
            "D"=>20,
        ];
    }
}
