<?php



namespace App\Traits;
trait HasImage {

    protected string $imagePath;
    protected string $imageField;

    public function add(&$input)
    {
        if(request($this->imageField))
        {
            $file = request()->file($this->imageField);
            $fileName = uniqid().".".$file->extension();
            \Storage::disk('public')->put($fileName, \File::get($file));
            $input[$this->imageField] = $fileName;
        }
    }
    public function delete($imageName)
    {
         \Storage::disk('public')->delete($this->imagePath.$imageName );

    }
}
