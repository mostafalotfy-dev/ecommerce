<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AjaxController extends Controller
{
    public function store_language()
    {
        request()->validate(
        [
            "key"=>"required|integer",
            "value"=>"required|string"
        ]);
      factory("lang")->updateById(\request("key"),\request("value"));
      return response([

      ],204);
    }
    public function get_language()
    {

        return response()->json([
            "data"=>factory("lang")->orderBY("id","desc")->paginate()
        ]);
    }

    public function search_language()
    {
        $search_value = str(\request("search"))->replace("-","/");
        return response()->json(

            factory("lang")->search($search_value)

            );
    }
}
