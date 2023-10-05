<?php

namespace App\Traits;

trait HasImage
{
    protected string $path;

    protected string $field;

    public function add(&$input): void
    {
        if (request($this->field)) {
            $file = request()->file($this->field);
            $fileName = $this->path.'/'.$file->getClientOriginalName().'.'.$file->extension();
            \Storage::disk('public')->put($fileName, \File::get($file));
            $input[$this->field] = $fileName;
        }
    }

    public function delete($imageName): void
    {
        factory('compare')->when((bool) $imageName, fn () => \Storage::disk('public')->delete($imageName));

    }
}
