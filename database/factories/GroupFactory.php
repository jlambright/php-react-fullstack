<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Group;
use Faker\Generator as Faker;

$factory->define(Group::class, function (Faker $faker) {
    $groupPrefix = $faker->unique()->safeColorName;
    $groupSuffix = $faker->numberBetween(0,10);
    $groupName = $groupPrefix . ' ' . $groupSuffix;

    return [
        'group_name' => $groupName
    ];
});
