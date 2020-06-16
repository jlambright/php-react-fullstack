<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Person;

class Group extends Model
{
    protected $table = 'groups';
    protected $fillable = [
        'group_name'
    ];

    /**
     * The people that belong to a group.
     */
    public function members()
    {
        return $this->belongsToMany(Person::class, 'group_members');
    }
}
