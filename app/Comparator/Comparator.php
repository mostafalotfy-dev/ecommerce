<?php

namespace App\Comparator;

use App\Repositories\Repository;

class Comparator
{
    private Repository $repository;


    public function setRepository($repository): void
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
    public function exists($keyName, $key):bool
    {
       return $this->repository->where($keyName,"LIKE","%$key%")->count() > 0;
    }
    public function isProduction():bool
    {
        return env("APP_DEBUG") == false && env("APP_ENV") == "production";
    }
    public function unless(bool $predicate,\Closure $cb)
    {
        return $this->when(!$predicate,$cb);
    }
    public function when(bool $predicate ,\Closure $cb)
    {
        if($predicate)
        {
            return $cb($this->repository);
        }
    }
}
