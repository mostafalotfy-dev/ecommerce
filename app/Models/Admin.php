<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laratrust\Traits\HasRolesAndPermissions;

class Admin extends Authenticatable
{
    use HasFactory,HasRolesAndPermissions;
    protected $guarded = ["_token"];
    protected array $guard_name = ['api', 'admin'];
}
