<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrderStatusController extends Controller
{
    public function __construct(public OrderStatusControllerRepository $OrderStatusControllerRepository)
    {

    }
}
