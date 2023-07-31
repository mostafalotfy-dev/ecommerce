<?php

namespace  App\Repositories;


class PermissionRoleRepository extends Repository
{

    function tableName(): string
    {
        return "permission_role";
    }
}
