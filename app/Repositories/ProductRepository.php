<?php

namespace App\Repositories;


class ProductRepository extends Repository
{
    protected $searchableFields = [
        "name_en",
        "name_ar",
        "price",
        "description",
        "discount",
        "in_stock",
        "stock_count",

    ];
    public function tableName(): string
    {
        return "prodcuts";
    }

}
