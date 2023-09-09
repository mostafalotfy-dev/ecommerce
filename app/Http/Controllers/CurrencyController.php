<?php

namespace App\Http\Controllers;

class CurrencyController extends Controller
{
    public function __construct(public CurrencyControllerRepository $CurrencyControllerRepository)
    {

    }
}
