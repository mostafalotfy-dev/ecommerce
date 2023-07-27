<?php


namespace App\Repositories;

use App\Repositories\Repository;


class ProductInfoRepository extends Repository
{

    public function tableName(): string
    {
        return "products_infos";
    }
}
