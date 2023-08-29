<?php

namespace App\Repositories;

class CountryRepository extends Repository
{

    function tableName(): string
    {
        return "countries";
    }
}
