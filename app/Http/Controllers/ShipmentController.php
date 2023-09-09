<?php

namespace App\Http\Controllers;

class ShipmentController extends Controller
{
    public function __construct(public ShipmentControllerRepository $ShipmentControllerRepository)
    {

    }
}
