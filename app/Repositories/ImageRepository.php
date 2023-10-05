<?php

namespace App\Repositories;

use App\Traits\HasImage;

class ImageRepository extends Repository
{
    use HasImage;

    public function setImageName($name): static
    {
        $this->field = $name;

        return $this;
    }

    public function setImagePath($path): static
    {
        $this->path = $path;

        return $this;
    }
    public function all()
    {
        return $this->get();
    }

    public function tableName(): string
    {
        return 'images';
    }
}
