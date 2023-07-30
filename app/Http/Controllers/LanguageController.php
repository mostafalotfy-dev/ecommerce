<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function index()
    {
       $language =  factory("lang")->where("key","LIKE",app()->getLocale()."%")->whereNull("value")->get();
        return view("languages.index",compact("language"));
    }
}
