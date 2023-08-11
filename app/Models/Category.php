<?php

namespace App\Models;

use App\Traits\HasSelfJoin;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory, HasSelfJoin;

    protected $fillable = [
        "name_en",
        "name_ar",
        "status"
    ];
}
