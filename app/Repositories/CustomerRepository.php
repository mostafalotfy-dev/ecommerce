<?php

namespace App\Repositories;


class CustomerRepository extends  Repository
{

    function tableName(): string
    {
        return "users";
    }
}
