<?php


namespace App\Repositories;


class AdminRepository extends Repository{
    protected $searchableFields = [
        "first_name",
        "last_name",
        "email",
        "phone_number",
        "profile_image",

    ];
    public function tableName()
    {
        return "admins";
    }
}