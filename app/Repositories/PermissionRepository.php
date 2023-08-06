<?php


namespace App\Repositories;

use App\Models\Admin;

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
    public function hasPermission($permissions,$user_id): bool
    {

        return factory("permission_role")
                ->join("permissions","permissions.id","permission_role.permission_id")
                ->join("roles","roles.id","permission_role.role_id")
                ->join("admins","roles.id","admins.role_id")
                ->where("admins.id",$user_id)
                ->whereIn("permissions.name_en",$permissions)
                ->count("permissions.id","permissions.role_id") !== 0;
    }
}
