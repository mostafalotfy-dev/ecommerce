<?php

namespace App\Contracts;

use Illuminate\Database\Eloquent\Model;

interface ToModelContract
{
    public function toModel(): Model;
}
