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
	    $countries = \DB::table("countries")->pluck("country_".app()->getLocale()."Name","country_code");
        return view("customers.create",compact("countries"));
    }

	public function show(User $user)
	{
		return view("customers.show",compact("user"));
	}
	public function edit( $id)
	{
	  $countries = \DB::table("countries")->pluck("country_".app()->getLocale()."Name","country_code");
 $user = factory("customer")->find($id)->first();	


		return view("customers.edit",compact("user","countries"));
	}
	public function update(UpdateCustomerRequest $request,$id)
	{
		$customer = factory("customer")->find($id);
	$input = $request->validated();
		image('profile_image',"images")->delete($customer->first()->profile_image);
		image('profile_image',"images")->add($input);
		$customer->update($input);		
			return response()->json([
				"redirect_to"=>route("customers.index"),

				"message"=>lang("success")
			]);

	}
	public function store(CreateCustomerRequest $request)
	{
		$input = $request->validated();
		$input["ip_address"] = $request->ip();
		image("profile_image","images")->add($input);
		$customer = factory("customer")->create($input);

		return factory("response")
			->success(route("customers.index"),route("customers.store"));
	}
	public function destroy( $id)
	{
		
		
		$customer = factory("customer")->find($id);

		image("profile_image","images")->delete($customer->first()->profile_image);
	$customer->delete();	
		return to_route("customers.index");
	}
}

