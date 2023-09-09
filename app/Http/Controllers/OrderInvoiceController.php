<?php

namespace App\Http\Controllers;

class OrderInvoiceController extends Controller
{
    public function __construct(public OrderInvoiceControllerRepository $OrderInvoiceControllerRepository)
    {

    }
}
