<?php 



namespace App\Traits;
trait HasImage {
    
    protected string $imagePath;
    protected string $imageName;
   
    public function add(&$input)
    {
        if(isset($input[$this->imageName]))
        {
            $file = request()->file($this->imageName);
            $fileName = $file->getClientOriginalName();
            $file->store($this->imagePath);
            $input[$this->imageName] = $fileName;
        }
    }
    public function delete()
    {
        if(file_exists($this->imagePath))
            unlink($this->imagePath);
    }
}