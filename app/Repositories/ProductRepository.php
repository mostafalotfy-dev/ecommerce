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
    static $rules = [
        "name_en"=>"required|string|max:255|regex:(^[A-z])",
        "name_ar"=>"required|string|max:255|regex:(^[ء-ي])",
        "price"=>"required|integer|min:1|max:99999999",
        "quantity"=>"required|integer|min:0"
    ];
    public function tableName(): string
    {
        return "products";
    }

}
