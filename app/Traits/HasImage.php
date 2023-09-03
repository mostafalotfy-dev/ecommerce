<?php



namespace App\Traits;
trait HasImage {

    protected string $path;
    protected string $field;

    public function add(&$input)
    {
        if(request($this->field))
        {
            $file = request()->file($this->field);
            $fileName = $this->path . "/". $file->getClientOriginalName().".".$file->extension();
            \Storage::disk('public')->put($fileName, \File::get($file));
            $input[$this->field] = $fileName;
        }
    }
    public function delete($imageName)
    {
        factory("compare")->when(!!$imageName,fn()=>  \Storage::disk('public')->delete($imageName ));


    }
}
