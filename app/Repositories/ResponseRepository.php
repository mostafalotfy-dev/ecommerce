<?php

namespace App\Repositories;


class ResponseRepository {

    public  function success($routeOnAddMore,$routeOnSave)
    {
        return response()->json([
            "message"=>lang("success"),
            "redirect_to"=>request("save_and_add") ? $routeOnAddMore : $routeOnSave
        ]);
    }
}
