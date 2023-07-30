<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BranchController extends Controller
{
    public function __construct(public BranchControllerRepository $BranchControllerRepository)
    {

    }
}
