<?php

namespace App\Repositories;

class BannerRepository extends Repository
{
    protected $searchableFields = [
        'file_name',
        'alt',
        'description',
    ];

    public static $rules = [
        'alt' => 'nullable|string|max:255',
        'description' => 'nullable|string',
    ];

    public function tableName(): string
    {
        return 'banners';
    }
}
