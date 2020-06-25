<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Models\Group;
use App\Models\Person;
use Faker\Generator as Faker;

$factory->define(Person::class, function (Faker $faker) {

    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'email_address' => $faker->unique()->safeEmail,
        'status' => (bool)random_int(0, 1) ? 'active' : 'archived'
    ];
});
