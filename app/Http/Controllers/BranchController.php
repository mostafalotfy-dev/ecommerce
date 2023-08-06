<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateBranchRequest;
use App\Http\Requests\UpdateBranchRequest;
use App\Models\Branch;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

class BranchController extends Controller
{
	public function index()
	{
		return view("branches.index");
	}
	public function show(Branch $branch)
	{
		return view("branches.show",compact("branch"));
	}
	public function create(): View|Application|Factory|\Illuminate\Contracts\Foundation\Application
    {
        return view("branches.create");
	}
    public  function store(CreateBranchRequest $request)
    {


    }
    public function edit(Branch $branch)
    {
        return view("branches.edit",compact("branch"));
    }
    public function update(UpdateBranchRequest $request,Branch $branch)
    {

    }

    public  function destroy(Branch $branch)
    {
        $branch->delete();
        return response()->json();
    }
}
