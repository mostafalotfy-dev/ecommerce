<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Role extends Model
{
    public $guarded = [];
    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }
    public function hasPermission($name)
    {

    }
}
