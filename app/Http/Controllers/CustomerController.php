<?php

namespace App\Http\Controllers;
use App\Datatables\CustomerDatatables;
use Illuminate\Http\Request;
class CustomerController extends Controller
{
	public function index()
	{
		return app(CustomerDatatables::class)->render("customers.index");
	
	}
	public function show(User $user)
	{
		return view("customers.show",compact("user"));
	}
	public function edit( User $user)
	{
		return view("customers.edit",compact("user"));
	}
	public function update(UpdateCustomerRequest $request,User $user)
	{

	}
	public function store(CreateCustomerRequest $request)
	{
	}
	public function destroy(User $user)
	{
		image("profile_image","images")->delete($user->profile_image);
		
		$user->delete();
	}
}
	
