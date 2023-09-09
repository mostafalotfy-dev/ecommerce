<?php

namespace App\Repositories;

class AddressRepository extends Repository
{
    public function tableName(): string
    {
        return 'address';
    }
}
