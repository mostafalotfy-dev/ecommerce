<?php


namespace App\Repositories;

use DB;
use Illuminate\Foundation\Http\FormRequest;

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
        return $this->where("id", $id)->first();
    }

    public function search($keyword)
    {
        $result = $this;

        foreach ($this->searchableFields as $searchableField) {

            $result = $result->orWhere($searchableField, "LIKE", "%{$keyword}%") ;
        }
        return $result->cursor();
    }
}
