<?php

namespace App\Http\Controllers;

class OrderHistoryController extends Controller
{
    public function __construct(public OrderHistoryControllerRepository $OrderHistoryControllerRepository)
    {

    }
}
