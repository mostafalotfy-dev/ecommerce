<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrderShipmentController extends Controller
{
    public function __construct(public OrderShipmentControllerRepository $OrderShipmentControllerRepository)
    {

    }
}
