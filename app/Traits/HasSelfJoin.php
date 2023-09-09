<?php

namespace App\Traits;

trait HasSelfJoin
{
    public function parents($id)
    {
        return $this->where('category_id', 0)
            ->where('id', $id)->first();
    }

    public function children($parentId)
    {
        return $this->where('category_id', '!=', 0)->where('category_id', $parentId)->cursor();
    }
}
