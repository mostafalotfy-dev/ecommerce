<?php


namespace App\Repositories;


class AttributeRepository extends Repository
{
    static array $rules = [
         "name_en"=>"required|string|regex:(^[A-z])",
        "name_ar"=>"required|string|regex:|(^[ء-ي])",
        "type"=>"required|in:text,checkbox,color,select,date,datetime-local"
    ];
    /**
     * @return string
     */
    function tableName(): string
    {
        return "attributes";
    }
}
