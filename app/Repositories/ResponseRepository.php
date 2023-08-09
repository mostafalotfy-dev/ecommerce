<?php

namespace App\Repositories;


class ResponseRepository {

    public  function success($routeOnSave)
    {

        return response()->json([
            "message"=>lang("success"),
            "redirect_to"=> $routeOnSave
        ]);
    }
}
