<?php


namespace App\Repositories;


use App\Comparator\Comparator;

use Illuminate\Database\Eloquent\ModelNotFoundException;

class  LangRepository extends Repository {

    protected Comparator $comparator;

    public function  __construct()
    {
        $this->comparator = new Comparator($this);
    }

    function tableName(): string
    {
        return "languages";
    }
    public function key($key)
    {
        return $this->where("key",$key)->first() ;
    }

    public function set($key,$value){

        return $this->comparator->exists("key",$key) ? $this->where("key",$key)->update([
            "key"=>$key,
            "value"=>$value,
            "updated_at"=>now()
        ]) : $this->insert([
            "key"=>$key,
            "value"=>$value,
            "created_at"=>now(),
        ]);
    }
}
