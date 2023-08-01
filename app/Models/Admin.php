<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Admin extends Authenticatable
{
    use HasFactory;
    protected $guarded = ["_token"];
    public function role():BelongsTo
    {
        return $this->belongsTo(Role::class);
    }

    protected function scopeHasRole($query)
    {
        return $query->join("role_user","roles.id","user_role.role_id")
            ->join("permission_role","permission_role.role_id","roles.id");
    }

}
