<?php

namespace App\Repositories;


class BannerRepository extends Repository
{
    protected $searchableFields = [
        "file_name",
        "alt",
        "description",
    ];
    public function tableName(){
        return "banners";
    }
    
}