<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Course extends Model
{
    use HasFactory;

    public function prerequisites()
    {
        return $this->belongsToMany(Course::class, 'course_prerequisite', 'course_id', 'prerequisite_course_id');
    }

    public function beingPrerequisiteFor()
    {
        return $this->belongsToMany(Course::class, 'course_prerequisite', 'prerequisite_course_id', 'course_id');
    }

    public function scopeFilterByName(Builder $query, $input = null)
    {
        if ($input) {
            $query->where(function ($query) use ($input) {
                $query->where('name', 'like', '%' . $input . '%')
                    ->orWhere('code', 'like', '%' . $input . '%');
            });
        }

        return $query;
    }

    public function batches()
    {
        return $this->belongsToMany(Batch::class, 'batch_course_semester', 'batch_id', 'course_id',)->withPivot('semester_id');
    }
}
