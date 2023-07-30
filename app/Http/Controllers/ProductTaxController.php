<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductTaxController extends Controller
{
    public function __construct(public ProductTaxControllerRepository $ProductTaxControllerRepository)
    {

    }
}
