<?php

namespace App\Contracts;

use Illuminate\Database\Eloquent\Model;

interface ToModelContract{
    function toModel():Model;

}
