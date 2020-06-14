<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Person;

class Group extends Model
{
    protected $fillable = [
        'group_name'
    ];

    /**
     * The people that belong to a group.
     */
    public function people()
    {
        return $this->belongsToMany(Group::class, 'group_members', 'group_id', 'person_id')
            ->as('members')
            ->withTimestamps();
    }
}
