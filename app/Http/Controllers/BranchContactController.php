<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BranchContactController extends Controller
{
    public function __construct(public BranchContactControllerRepository $BranchContactControllerRepository)
    {

    }
}
