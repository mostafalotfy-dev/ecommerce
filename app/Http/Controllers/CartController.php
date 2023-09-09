<?php

namespace App\Http\Controllers;

class CartController extends Controller
{
    public function __construct(public CartControllerRepository $CartControllerRepository)
    {

    }
}
