<?php

namespace App\Comparator;

use App\Repositories\Repository;

class Comparator
{
    private Repository $repository;

    public function __construct( Repository $repository)
    {
        $this->repository = $repository;
    }

    public function equal($a, $b)
    {
        return $a == $b;
    }

    public function isJson($text)
    {
        json_decode($text);
        return json_last_error() === 0;
    }
    public function exists($keyName, $key)
    {
       return $this->repository->where($keyName,$key)->count() > 0;
    }
    public function isProduction()
    {
        return env("APP_DEBUG") == false && env("APP_ENV") == "production";
    }
    
    public function when($bool ,\Closure $cb)
    
    {
        if($bool)
        {
            return $cb($this->repository); 
        }
    }
}
