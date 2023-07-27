<?php

namespace App\Comparator;

use App\Repositories\Repository;

class Comparator
{

    public function __construct(private Repository $repository)
    {
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
    public function exists($key, $value)
    {
       return $this->repository->where($key,$value)->count() > 1;
    }
}
