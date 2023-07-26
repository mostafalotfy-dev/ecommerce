<?php

namespace App\Models;

use App\Traits\HasSelfJoin;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory,HasSelfJoin;
}
