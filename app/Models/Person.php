<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Group;

class Person extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'email_address',
        'status'
    ];

    /**
     * The groups that the person belongs to.
     */
    public function groups() {
        return $this->belongsToMany(Group::class, 'group_members', 'person_id', 'group_id')
            ->as('memberships')
            ->withTimestamps();
    }
}
