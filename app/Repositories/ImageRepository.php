<?php 


namespace App\Repositories;
use App\Traits\HasImage;


class ImageRepository extends Repository{
    use HasImage;
    public function tableName()
    {
        return "images";
    }
}   