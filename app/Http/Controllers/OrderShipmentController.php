<?php

namespace App\Http\Controllers;

class OrderShipmentController extends Controller
{
    public function __construct(public OrderShipmentControllerRepository $OrderShipmentControllerRepository)
    {

    }
}
