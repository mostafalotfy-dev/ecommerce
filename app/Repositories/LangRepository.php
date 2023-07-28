<?php


namespace App\Repositories;


use App\Comparator\Comparator;


class  LangRepository extends Repository {

    protected Comparator $comparator;
    static $rules = [
        "key"=> "required|string|max:255",
        "value"=>"requierd|string|max:255"
    ];
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
