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
    
            return $this->table()->$name(...$args);
    
      
    }
    public function db()
    {
        return app(DB::class);
    }
    public function transaction(\Closure $cb)
    {
        $this->db()->beginTransaction();
        $result  = $cb($this->table());
        
        $this->commitIf($result);
        $this->rollbackIf($result);
    }
    public function commitIf($a)
    {
        if($a)
        {
            $this->db()->commit();
        }
    }
    public function rollbackIf($a)
    {
        if(!$a)
        {
            $this->db()->rollBack();
        }
    }
    public function find($id)
    {
        return $this->where("id",$id)->first();
    }
   public function search($keyword)
   {
    $result =null;
    
    foreach($this->searchableFields as $searchableField)
    {
        echo $searchableField;
         $result =  $result ? $result->orWhere($searchableField,"LIKE","%{$keyword}%") : $this->where($searchableField,"Like","%{$keyword}%");
    }
    return $result->get();
   }
}