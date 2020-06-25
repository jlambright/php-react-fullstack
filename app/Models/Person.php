<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


/**
 * Class Person
 *
 * @mixin Model
 * @package App\Models
 */
class Person extends Model
{
    protected $hidden = ['pivot'];
    protected $table = 'people';
    protected $fillable = [
        'first_name',
        'last_name',
        'email_address',
        'status'
    ];

    /**
     * The groups that the person belongs to.
     */
    public function memberships() {
        return $this->belongsToMany(Group::class,'group_members')->withTimestamps();
    }
}
