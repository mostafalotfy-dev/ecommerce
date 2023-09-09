<?php

namespace App\Http\Controllers;

class OrderDetailsController extends Controller
{
    public function __construct(public OrderDetailsControllerRepository $OrderDetailsControllerRepository)
    {

    }
}
