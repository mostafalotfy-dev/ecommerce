<?php


namespace App\Repositories;

use App\Http\Requests\AdminRequest;
use App\Models\Admin;


class AdminRepository extends Repository{
    protected $searchableFields = [
        "first_name",
        "last_name",
        "email",
        "phone_number",
        "profile_image",

    ];
    static $rules = [
        "first_name"=>"required|string|max:255",
        "last_name"=>"required|string|max:255",
        "email"=>"required|email|string|max:255|unique:admins,email",
        "phone_number"=>"required|string|min:11|unique:admins,phone_number",
        "profile_image"=>"nullable|image|max:5096",
        "role_id"=>"required|exists:roles,id",
        "password"=>"required|min:8|max:255"
        ];

    public function tableName(): string
    {
        return "admins";
    }
}
