<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductMetaController extends Controller
{
    public function __construct(public ProductMetaControllerRepository $ProductMetaControllerRepository)
    {

    }
}
