<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Group;
use App\Models\GroupMembers;
use App\Models\Person;
use Faker\Generator as Faker;

$factory->define(GroupMembers::class, function (Faker $faker) {
    return [
        'group_id'
    ];
});
