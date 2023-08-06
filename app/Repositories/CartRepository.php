<?php

namespace App\Repositories;


class CartRepository extends  Repository
{

    function tableName(): string
    {
        return "carts";
    }
}
