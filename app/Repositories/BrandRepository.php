<?php


namespace App\Repositories;

class BrandRepository extends Repository
{
    static  $rules = [
        "name_en"=>"required|max:255|regex:(^[A-z])|unique:brands,name_en",
        "name_ar"=>"required|max:255|regex:(^[ء-ي])|unique:brands,name_ar",
    ];
	public function tableName():string
	{
		return "brands";
	}
}
