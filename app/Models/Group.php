<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Person;

/**
 * Class Group
 *
 * @mixin Model
 * @package App\Models
 */
class Group extends Model
{
    protected $table = 'groups';
    protected $fillable = [
        'name',
        'status'
    ];


    /**
     * The people that belong to a group.
     */
    public function members() {
        return $this->belongsToMany(Person::class, 'group_members')->withTimestamps();
    }
}
