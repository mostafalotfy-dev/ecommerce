<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CityController extends Controller
{
    public function __construct(public CityControllerRepository $CityControllerRepository)
    {

    }
}
