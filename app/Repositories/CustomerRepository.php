<?php

namespace App\Repositories;


class CustomerRepository extends  Repository
{
	static array $rules = [
		"name"=>"required|max:255",
		"mobile_code"=>"required|min:2|max:3|string",
		"mobile"=>"required|string",
		"dob"=>"required|date",
		"email"=>"required|email",
		"profile_image"=>"nullable|image",
		"is_active"=>"nullable|in:1,0",
        "password"=>"required|max:255|min:8"
	];
    function tableName(): string
    {
        return "users";
    }
}
