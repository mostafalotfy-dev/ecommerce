<?php 

namespace App\Repositories;

class SettingRepository extends Repository{
    protected $searchableField = [
        "key",
        "value"
    ];
    public function tableName()
    {
        return "settings";
    }
    public function getByKey($key)
    {
        return $this->where("key",$key)->first();
    }
    public function setKey($key,$value)
    {
        return $this->where("key",$key)->firstOrFail()?->update([
            "value"=>$value
        ]);
    }
}