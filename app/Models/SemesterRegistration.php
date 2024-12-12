<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SemesterRegistration extends Model
{
    use HasFactory;

    public function semester()
    {
        return $this->belongs(Semester::class);
    }
}
