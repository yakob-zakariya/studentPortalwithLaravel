<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Semester extends Model
{
    use HasFactory;

    public function academicYear()
    {
        return $this->belongsTo(AcademicYear::class);
    }

    public function courses()
    {
        return $this->belongsToMany(Course::class, 'batch_course_semester', 'course_id', 'semester_id')->withPivot('batch_id');
    }

    public function semesterRegistrations()
    {
        return $this->hasMany(SemesterRegistration::class);
    }

    public function registrations()
    {
        return $this->hasMany(Registration::class);
    }

    public function courseAllocations()
    {
        return $this->hasMany(TeacherCourseAllocation::class);
    }
}
