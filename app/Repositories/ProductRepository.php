<?php

namespace App\Repositories;

class ProductRepository extends Repository
{
    protected $searchableFields = [
        'name_en',
        'name_ar',
        'price',
        'description',
        'discount',
        'in_stock',
        'stock_count',

    ];

    public static $rules = [
        'name_en' => 'required|string|max:255|regex:(^[A-z])|unique:products,name_en',
        'name_ar' => 'required|string|max:255|regex:(^[ء-ي])|unique:products,name_ar',
        'price' => 'required|integer|min:1|max:99999999',
        'quantity' => 'required|integer|min:0',
        'status' => 'nullable|in:1,0',
        'description_en' => 'required|string',
        'description_ar' => 'required|string',
        'brand_name' => 'required',
        'branch_name' => 'required',

    ];

    public function tableName(): string
    {
        return 'products';
    }
}
