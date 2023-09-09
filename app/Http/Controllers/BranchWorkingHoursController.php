<?php

namespace App\Http\Controllers;

class BranchWorkingHoursController extends Controller
{
    public function __construct(public BranchWorkingHoursControllerRepository $BranchWorkingHoursControllerRepository)
    {

    }
}
