<?php


namespace App\Http\Controllers\Search;

use Illuminate\Http\Request;
use App\Models\Group;

class GroupSearch
{
    public static function apply(Request $filters)
    {
        $group = (new Group)->newQuery();

        // Search for a user based on their name.
        if ($filters->has('name')) {
            $group->where('name', $filters->input('name'));
        }

        // Get the results and return them.
        return $group->get();
    }

}
