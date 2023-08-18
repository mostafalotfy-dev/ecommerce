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
            $fileName = $this->imagePath . "/". uniqid().".".$file->extension();
            \Storage::disk('public')->put($fileName, \File::get($file));
            $input[$this->imageField] = $fileName;
        }
    }
    public function delete($imageName)
    {
         \Storage::disk('public')->delete($imageName );

    }
}
