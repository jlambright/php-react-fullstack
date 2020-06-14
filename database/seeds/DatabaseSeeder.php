<?php

use App\Models\Group;
use App\Models\Person;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(GroupTableSeeder::class);
        $this->call(PersonTableSeeder::class);

        // Get all the roles attaching up to 3 random roles to each user
        $groupIds = Group::all();

        // Populate the pivot table
        Person::all()->each(function ($person) use ($groupIds) {
            $person->groups()->attach(
                $groupIds->random(rand(1, 3))->pluck('id')->toArray()
            );
        });
    }
}
