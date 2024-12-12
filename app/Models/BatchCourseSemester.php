<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

//batch_course_semester

class BatchCourseSemester extends Model
{
    protected $table = 'batch_course_semester';
    use HasFactory;

    public function teacherCourseSectionAssignments()
    {
        return $this->hasMany(TeacherCourseSectionAssignment::class);
    }

    public function batch()
    {
        return $this->belongsTo(Batch::class);
    }

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function semester()
    {
        return $this->belongsTo(Semester::class);
    }
}
