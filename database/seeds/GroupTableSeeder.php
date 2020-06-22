<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use App\Models\Group;

class GroupTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $group_names = [
            'Elders',
            'Leads',
            'Coaches',
            'Volunteers',
            'Small Groups',
            'Student Ministry',
            'Student Parent',
            'Children\'s Ministry',
            'Children\'s Parent',
            'Safety Team',
        ];
        $date = Carbon::now()->subMinutes(rand(1, 55));

        $created_at = $date->format('Y-m-d H:i:s');
        $updated_at = $date->addWeeks(rand(1, 52))->format('Y-m-d H:i:s');
        $statuses = ['active', 'archived'];

        foreach ($group_names as $index=>$group_name) {
            $status = array_rand($statuses,1);
            Group::create([
                'name'=>$group_name,
                'status'=>$statuses[$status],
                'created_at'=>$created_at,
                'updated_at'=>$updated_at
            ]);
        }
    }
}
