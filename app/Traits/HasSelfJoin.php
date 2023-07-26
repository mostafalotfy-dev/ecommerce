<?php 


namespace App\Traits;

trait HasSelfJoin{
    public function parents()
    {
        return $this->where("category_id" ,0)->cursor();
    }
    public function children($parentId)
    {
        return $this->where("category_id","!=",0)->where("category_id",$parentId)->cursor();
    }
}