<?php

namespace App\Repositories;

class ProductInfoRepository extends Repository
{
    public function tableName(): string
    {
        return 'products_infos';
    }
}
