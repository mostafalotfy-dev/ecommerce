<?php

namespace App\Http\Controllers;

use App\DataTables\BranchesDataTable;
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
		return app(BranchesDataTable::class)->render("branches.index");
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
	    

	   
	    \DB::transaction(function() use($request){	
	    $input = $request->only("name_en","name_ar","description_en","description_ar"); 
	    	    
	    $branch_id = factory("branch")->insertGetId($input);
	    factory('working_hours')->insert([
		    "open_time"=>now()->parse($request->open_time),
		    "close_time"=>now()->parse($request->close_time),
		    "branch_id" =>$branch_id
	    ]);
	});
	
 	
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
