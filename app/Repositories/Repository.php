<?php


namespace App\Repositories;

use DB;


abstract class Repository
{
    abstract function tableName() :string;


    protected function table()
    {
        return DB::table($this->tableName());
    }

    public function __call($name, $args)
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
        $result = $cb($this->table());

        $this->commitIf($result);
        $this->rollbackIf($result);
    }

    public function commitIf($a)
    {
        if ($a) {
            $this->db()->commit();
        }
    }

    public function rollbackIf($a)
    {
        if (!$a) {
            $this->db()->rollBack();
        }
    }

    public function find($id)
    {
        return $this->where("id", $id);
    }
    public function create($input)
    {
        $input = array_merge($input,[
            "created_at"=>now()
        ]);
        $this->insert($input);
    }
    public function updateFields($input,$id)
    {
        $input= array_merge($input,[
            "updated_at"=>now()
        ]);
        $this->find($id)->update($input);
    }
    public function search($keyword)
    {
        $result = $this;

        foreach ($this->searchableFields as $searchableField) {

            $result = $result->orWhere($searchableField, "LIKE", "%{$keyword}%") ;
        }
        return $result->orderBy("id","desc")->get();
    }



}
