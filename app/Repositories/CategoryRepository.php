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
    public function tableName()
    {
        return "categories";
    }
    public function searchByCategoryId($id)
    {
       return $this->where("category_id",$id);
    }
   
}

