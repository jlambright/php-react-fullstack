<?php


namespace App\Http\Controllers\Search;

use App\Models\Group;
use Illuminate\Http\Request;
use App\Models\Person;

class PersonSearch
{
    public static function apply(Request $filters)
    {
        $person = (new Person)->newQuery();

        // Get the results and return them.
        return $person->get();
    }

}
