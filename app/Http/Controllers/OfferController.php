<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OfferController extends Controller
{
    public function __construct(public OfferControllerRepository $OfferControllerRepository)
    {

    }
}
