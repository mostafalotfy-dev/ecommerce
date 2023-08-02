<?php


namespace App\Repositories;
use App\Traits\HasImage;


class ImageRepository extends Repository{
    use HasImage;

    public function setImageName($name)
    {
        $this->imageField = $name;
        return $this;
    }
    public function setImagePath($path)
    {
        $this->imagePath = $path;
        return $this;
    }
    public function tableName():string
    {
        return "images";
    }
}
