<?php

namespace App\Repositories;


use Illuminate\Http\JsonResponse;

class ResponseRepository {

    public  function success($routeOnSave): JsonResponse
    {

        return response()->json([
            "message"=>lang("success"),
            "redirect_to"=> $routeOnSave
        ]);
    }
}
