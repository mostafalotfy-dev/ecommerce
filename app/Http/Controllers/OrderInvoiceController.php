<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrderInvoiceController extends Controller
{
    public function __construct(public OrderInvoiceControllerRepository $OrderInvoiceControllerRepository)
    {

    }
}
