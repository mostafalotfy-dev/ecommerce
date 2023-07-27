<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function __construct(public LanguageControllerRepository $LanguageControllerRepository)
    {

    }
}
