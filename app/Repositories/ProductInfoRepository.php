<?php 


namespace App\Repositories;
use App\Repositories\Repository;


class ProductInfo extends Repository
{

        public function tableName()
        {
            return "products_infos";
        }
}