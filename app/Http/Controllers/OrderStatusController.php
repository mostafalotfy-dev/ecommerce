<?php

namespace App\Http\Controllers;

class OrderStatusController extends Controller
{
    public function __construct(public OrderStatusControllerRepository $OrderStatusControllerRepository)
    {

    }
}
