<?php

namespace App\Http\Controllers;

class TaxController extends Controller
{
    public function __construct(public TaxControllerRepository $TaxControllerRepository)
    {

    }
}
