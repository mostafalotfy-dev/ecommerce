<?php 

namespace App\Comparator;

class Comparator
{


    public function equal($a , $b)
    {
        return $a == $b;
    }

   public function isJson($text)
   {
    json_decode($text);
    return json_last_error() === 0;
   }
}