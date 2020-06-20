<?php

namespace App\Http\Controllers;

use App\Http\Resources\GroupsCollection;
use App\Http\Resources\GroupResource;
use App\Models\Group;
use Illuminate\Http\Request;
use Psy\Util\Json;

use Vyuldashev\LaravelOpenApi\Annotations as OpenApi;

/**
 * @OpenApi\PathItem()
 */

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return GroupsCollection
     * @OpenApi\Operation()
     */
    public function index()
    {
        return new GroupsCollection(Group::paginate());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse|object
     * @OpenApi\Operation()
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'    => 'required|max:255'
        ]);

        $group = Group::create($request->all());

        return (new GroupResource($group))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return GroupResource
     * @OpenApi\Operation()
     */
    public function show($id) : GroupResource
    {
        return new GroupResource(Group::findOrFail($id));
    }

    /**
     * @param Request $request
     * @param Group $group
     * @OpenApi\Operation()
     */
    public function filter(Request $request, Group $group)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function edit(Group $group)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Group
     * @return \Illuminate\Http\JsonResponse
     * @OpenApi\Operation()
     */
    public function update(Request $request, $id)
    {
        $group = Group::findOrFail($id);
        $group->update($request->all());

        return response()->json(null, 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Group
     * @return \Illuminate\Http\JsonResponse
     * @OpenApi\Operation()
     */
    public function destroy($id)
    {
        $group = Group::findOrFail($id);
        $group->delete();

        return response()->json(null, 204);
    }
}
