<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Admin extends Authenticatable
{
    use HasFactory;
    protected $guarded = ["_token"];
    public function roles(): MorphToMany
    {
        return $this->morphToMany(Role::class,"user","role_user","role_id","user_id");
    }
    protected function scopeHasRole($query)
    {
        return $query->join("role_user","roles.id","user_role.role_id")
            ->join("permission_role","permission_role.role_id","roles.id");
    }

}
