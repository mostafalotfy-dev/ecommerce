<?php


namespace App\Repositories;

class BrandRepository extends Repository
{
	public function tableName():string
	{
		return "brands";
	}
}
