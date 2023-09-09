<?php

namespace App\Repositories;

class CountryRepository extends Repository
{
    public function tableName(): string
    {
        return 'countries';
    }
}
