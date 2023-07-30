<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductOptionController extends Controller
{
    public function __construct(public ProductOptionControllerRepository $ProductOptionControllerRepository)
    {

    }
}
