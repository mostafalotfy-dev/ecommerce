<?php

namespace App\Http\Controllers;

class OrderController extends Controller
{
    public function __construct(public OrderControllerRepository $OrderControllerRepository)
    {

    }
}
