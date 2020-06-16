<?php

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

        // Get all the group_ids
        $groupIds = Group::all();

        // Populate the pivot table
        Person::all()->each(function ($person) use ($groupIds) {
            $person->groups()->attach(
                // Attaching 1-3 randomly selected group_ids to each person record
                $groupIds->random(rand(1, 3))->pluck('id')->toArray()
            );
        });
    }
}
