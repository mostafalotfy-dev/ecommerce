<?php

namespace App\Repositories;


class RoleRepository extends Repository
{
    protected $searchableFields = [
        "name_en",
        "name_ar",
        "guard_name",
    ];
    public function tableName(){
        return "roles";
    }
}