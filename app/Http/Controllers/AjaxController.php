<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AjaxController extends Controller
{
    public function store_language()
    {
      factory("lang")->updateById(\request("key"),\request("value"));
      return response([

      ],204);
    }
}
