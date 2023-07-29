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
    public function hasPermission($name,$user_id)
    {
        return $this
        ->select("permission_role.*,roles.*,role_user.*")
        ->where("role_user.user_type",Admin::class)
        ->where("role_user.user_id",$user_id)
        ->where("permissions.name_en",$name)->count() !== 0;
    }
}
