<?php

namespace App\Http\Controllers;

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
	public function create()
	{
	}
}
