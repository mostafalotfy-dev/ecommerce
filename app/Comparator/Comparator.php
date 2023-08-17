<?php

namespace App\Comparator;

use App\Repositories\Repository;

class Comparator
{


    public function isCacheLangEnables()
    {
        return env("CACHE_LANG",false);
    }
    public  function addLangPermission()
    {
        return env("ADD_LANG",true);
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
            return $cb($this);
        }
    }
}
