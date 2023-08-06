<?php
namespace App\Repositories;
use App\Traits\HasSelfJoin;


class CategoryRepository extends Repository
{
    use HasSelfJoin;
    protected $searchableFields = [
        "name_en",
        "name_ar",
        "category_id",
    ];
    static $rules = [
        "name_en" => "required|string|max:255|regex:(^[A-z])|unique:categories,name_en",
        "name_ar" => "required|string|max:255|regex:(^[ء-ي])|unique:categories,name_ar",
        "category_id"=>"nullable|integer",
        "category_image"=>"nullable|image"

    ];
    public function tableName(): string
    {
        return "categories";
    }
    public function searchByCategoryId($id)
    {
       return $this->where("category_id",$id)->first();
    }

}

