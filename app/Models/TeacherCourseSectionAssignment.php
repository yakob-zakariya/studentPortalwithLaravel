<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeacherCourseSectionAssignment extends Model
{
    protected $table = 'teacher_course_allocations';
    use HasFactory;

    public function courseAllocation()
    {
        return $this->belongsTo(BatchCourseSemester::class, 'batch_course_semester_id');
    }

    public function teacher()
    {
        return $this->belongsTo(Teacher::class);
    }

    // public function course()
    // {
    //     return $this->belongsTo(Course::class);
    // }

    // public function semester()
    // {
    //     return $this->belongsTo(Semester::class);
    // }

    public function section()
    {
        return $this->belongsTo(Section::class);
    }
}
