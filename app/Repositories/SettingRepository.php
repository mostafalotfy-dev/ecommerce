<?php

namespace App\Repositories;

use App\Comparator\Comparator;
use App\Traits\Singleton;
use Illuminate\Support\Collection;

class SettingRepository extends Repository{

    /** @var Comparator */
    private Comparator $compare;
    private Collection $data;
    use Singleton;
    protected $searchableField = [
        "key",
        "value"
    ];
    
    public function __construct()
    {
        $this->compare = new Comparator($this);
        $this->data = $this->get();
    }
    public function tableName(): string
    {
        return "settings";
    }
    public function getByKey($key)
    {
        if($this->compare->isProduction())
        {
            $keys  = cache()->rememberForever("settings",fn()=>$this->data->pluck("value","key"));
            return $keys->value($key);
        }else
        {
            $keys = $this->data->pluck("value","key");
        }
        return $keys->value($key);
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
