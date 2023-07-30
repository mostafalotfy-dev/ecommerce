<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ShippingZoneController extends Controller
{
    public function __construct(public ShippingZoneControllerRepository $ShippingZoneControllerRepository)
    {

    }
}
