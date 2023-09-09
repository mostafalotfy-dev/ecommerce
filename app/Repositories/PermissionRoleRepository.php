<?php

namespace App\Repositories;

class PermissionRoleRepository extends Repository
{
    protected $searchableFields = [
        'id',
        'permission_id',
        'role_id',
    ];

    public function tableName(): string
    {
        return 'permission_role';
    }
}
