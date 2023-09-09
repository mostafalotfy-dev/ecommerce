<?php

namespace App\Repositories;

class CustomerRepository extends Repository
{
    public static array $rules = [
        'first_name' => 'required|max:255',
        'last_name' => 'required|max:255',
        'mobile_code' => 'required|min:2|max:3|string',
        'mobile' => 'required|string',
        'dob' => 'required|date',
        'email' => 'required|email',
        'profile_image' => 'nullable|image',
        'is_active' => 'nullable|in:1,0',
        'password' => 'required|max:255|min:8',
        'street_address' => 'nullable|string|max:255',

    ];

    public function tableName(): string
    {
        return 'customers';
    }
}
