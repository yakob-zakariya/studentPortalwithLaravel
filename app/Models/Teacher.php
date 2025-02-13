<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function teacherAssingments()
    {
        return $this->hasMany(TeacherCourseSectionAssignment::class, 'teacher_id');
    }



    public function courseAllocations()
    {
        return $this->hasMany(TeacherCourseAllocation::class);
    }
}
