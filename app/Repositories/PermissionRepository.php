<?php


namespace App\Repositories;
class PermissionRepository extends Repository
{
    protected $searchableFields = [
        "name_en",
        "name_ar",
        "display_name",
        "description",
    ];
    public function tableName():string
    {
        return "permissions";
    }
}
