<?php

namespace App\Repositories;

class CartRepository extends Repository
{
    public function tableName(): string
    {
        return 'carts';
    }
}
