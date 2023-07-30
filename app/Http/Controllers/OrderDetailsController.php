<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrderDetailsController extends Controller
{
    public function __construct(public OrderDetailsControllerRepository $OrderDetailsControllerRepository)
    {

    }
}
