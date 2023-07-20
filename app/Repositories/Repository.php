<?php 


namespace App\Repositories;
use DB;
abstract class Repository {
    abstract function tableName();
    protected function table()
    {
        return  DB::table($this->tableName());
    }
    public function __call($name,$args )
    {
        if(method_exists($this,$name))
        {
            return $this->table()->$name(...$args);
        }
        throw new \BadMethodCallException("Method Do not exist");
    }
    
    

   
   
}