<?php

namespace App\Repositories;

class OrderRepository extends Repository{

    /**
     * @return string
     */
    function tableName(): string
    {
        return "orders";
    }
}
