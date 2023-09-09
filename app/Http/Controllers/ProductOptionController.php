<?php

namespace App\Http\Controllers;

class ProductOptionController extends Controller
{
    public function __construct(public ProductOptionControllerRepository $ProductOptionControllerRepository)
    {

    }
}
