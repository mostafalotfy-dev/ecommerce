<?php

namespace App\Repositories;


class RoleRepository extends Repository
{
    protected $searchableFields = [
        "name_en",
        "name_ar",
        "guard_name",
    ];
    public function tableName(): string
    {
        return "roles";
    }
    public function permissions()
    {
        return $this->join("role_permissions","role.id","role_permissions.role_id")
            ->join("permissions","permissions.id","role_permissions.permission_id");
    }

}
