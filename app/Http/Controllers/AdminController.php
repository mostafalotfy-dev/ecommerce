<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function __construct(public AdminControllerRepository $AdminControllerRepository)
    {

    }
}
