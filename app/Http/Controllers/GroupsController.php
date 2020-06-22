<?php

namespace App\Http\Controllers;

use App\Http\Resources\GroupsCollection;
use App\Http\Resources\GroupsResource;
use App\Models\Group;
use Illuminate\Http\Request;


class GroupsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return GroupsCollection
     */
    public function index()
    {
        return new GroupsCollection(Group::all());
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
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'    => 'required|max:255'
        ]);

        $group = Group::create($request->all());

        return (new GroupsResource($group))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id Group ID
     * @return GroupsResource
     */
    public function show($id)
    {
        $group = Group::findOrFail($id)->load('members');
        return new GroupsResource($group);
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
     * @param  \App\Models\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Group $group)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function destroy(Group $group)
    {
        //
    }
}
