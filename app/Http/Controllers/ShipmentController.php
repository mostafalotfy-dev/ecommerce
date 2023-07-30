<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ShipmentController extends Controller
{
    public function __construct(public ShipmentControllerRepository $ShipmentControllerRepository)
    {

    }
}
