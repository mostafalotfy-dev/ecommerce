<?php

namespace App\Http\Controllers;

class CountryController extends Controller
{
    public function __construct(public CountryControllerRepository $CountryControllerRepository)
    {

    }
}
