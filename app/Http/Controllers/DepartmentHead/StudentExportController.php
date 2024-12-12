<?php

namespace App\Http\Controllers\DepartmentHead;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Exports\StudentsExport;
use App\Models\Batch;
use Maatwebsite\Excel\Facades\Excel;

class StudentExportController extends Controller
{
    public function exportBatchStudents(Batch $batch)
    {

        // dd($batch->students);
        return Excel::download(new StudentsExport($batch->id),"students_of_batch_$batch->name.xlsx");

        // return Excel::download(new UsersExport,'users.xlsx');

    }
}
