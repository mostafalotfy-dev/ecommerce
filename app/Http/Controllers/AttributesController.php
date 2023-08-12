<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateAttributeRequest;


class AttributesController extends Controller
{
   public function index()
   {
       return view("attributes.index");
   }
  public function store(CreateAttributeRequest $request)
  {

  }
}
