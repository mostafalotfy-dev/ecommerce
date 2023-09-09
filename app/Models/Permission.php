<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    public $guarded = [];

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
}
