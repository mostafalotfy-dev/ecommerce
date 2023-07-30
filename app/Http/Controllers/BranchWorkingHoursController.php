<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BranchWorkingHoursController extends Controller
{
    public function __construct(public BranchWorkingHoursControllerRepository $BranchWorkingHoursControllerRepository)
    {

    }
}
