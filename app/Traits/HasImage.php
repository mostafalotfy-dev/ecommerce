<?php



namespace App\Traits;
trait HasImage {

    protected string $imagePath;
    protected string $imageField;

    public function add(&$input)
    {
        if(isset($input[$this->imageField]))
        {
            $file = request()->file($this->imageField);
            $fileName = $file->getClientOriginalName();
            \Storage::disk('public')->put($this->imagePath . $fileName, \File::get($file));
            $input[$this->imageField] = $fileName;
        }
    }
    public function delete($imageName)
    {
         \Storage::disk('public')->delete($this->imagePath.$imageName );

    }
}
