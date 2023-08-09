<?php

namespace App\Repositories;

class AddressRepository extends Repository{

    function tableName(): string
    {
        return "address";
    }
}
