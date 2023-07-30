<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TaxController extends Controller
{
    public function __construct(public TaxControllerRepository $TaxControllerRepository)
    {

    }
}
