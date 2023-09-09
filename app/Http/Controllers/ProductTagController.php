<?php

namespace App\Http\Controllers;

class ProductTagController extends Controller
{
    public function __construct(public ProductTagControllerRepository $ProductTagControllerRepository)
    {

    }
}
