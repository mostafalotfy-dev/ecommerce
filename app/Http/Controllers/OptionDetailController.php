<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OptionDetailController extends Controller
{
    public function __construct(public OptionDetailControllerRepository $OptionDetailControllerRepository)
    {

    }
}
