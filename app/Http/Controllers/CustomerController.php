<?php

namespace App\Http\Controllers;
use App\Datatables\CustomerDatatables;
use App\Http\Requests\CreateCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;
use App\Models\User;
use Illuminate\Http\Request;
class CustomerController extends Controller
{
	public function index()
	{
		return app(CustomerDatatables::class)->render("customers.index");

	}
    public function create()
    {
        return view("customers.create");
    }

	public function show(User $user)
	{
		return view("customers.show",compact("user"));
	}
	public function edit( User $user)
	{


		return view("customers.edit",compact("customer"));
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

