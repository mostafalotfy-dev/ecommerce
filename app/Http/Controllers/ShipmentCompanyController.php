<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ShipmentCompanyController extends Controller
{
    public function __construct(public ShipmentCompanyControllerRepository $ShipmentCompanyControllerRepository)
    {

    }
}
