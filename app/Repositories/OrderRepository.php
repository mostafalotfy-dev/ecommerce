<?php

namespace App\Repositories;

class OrderRepository extends Repository
{
    public function tableName(): string
    {
        return 'orders';
    }
}
