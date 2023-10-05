<?php


namespace App\Repositories;


class FileRepository {

    public function directories($recursive=true)
    {
        return \Storage::disk('public')->directories(recursive : $recursive);
    }
    public function files($directory,$recursive = true)
    {
        return \Storage::disk('public')->files($directory, $recursive);
    }
    public function fromDB($searchValue = null)
    {
        return factory("image")->search($searchValue);
    }


}
