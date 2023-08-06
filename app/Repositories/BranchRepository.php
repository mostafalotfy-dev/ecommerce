<?php

namespace App\Repositories;

class BranchRepository extends Repository
{
	public function tableName():string
	{
		return "branches";
	}
}
