<?php

namespace App\Repositories;

class SettingRepository extends Repository{
    protected $searchableField = [
        "key",
        "value"
    ];
    public function tableName(): string
    {
        return "settings";
    }
    public function getByKey($key)
    {
        return $this->where("key",$key)->first();
    }
    public function setKey($key,$value)
    {
       return  $this->insert([
            "key"=>$key,
            "value"=>$value
        ]);
    }
    public function update($key,$value)
    {
        $this
        ->where("key",$key)->first()
        ->updateOrCreate([
            "key"=>$key,
            "value",$value
        ]);
    }


}
