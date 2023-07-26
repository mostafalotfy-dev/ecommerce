<?php 


namespace App\Repositories;
use App\Traits\HasImage;


class ImageRepository extends Repository{
    use HasImage;
    public function __construct(string $imageName,string $imagePath)
    {
        
        if(request()->file($imageName))
        {
            $this->imageName = $imageName;
            $this->imagePath = $imagePath;
        }
    }
    public function tableName()
    {
        return "images";
    }
}   