<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductTagController extends Controller
{
    public function __construct(public ProductTagControllerRepository $ProductTagControllerRepository)
    {

    }
}
