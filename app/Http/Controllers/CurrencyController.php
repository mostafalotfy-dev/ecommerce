<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CurrencyController extends Controller
{
    public function __construct(public CurrencyControllerRepository $CurrencyControllerRepository)
    {

    }
}
