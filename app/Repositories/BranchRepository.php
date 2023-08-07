<?php

namespace App\Repositories;

class BranchRepository extends Repository
{
	protected $searchableFields = [
		"id",
		"name_en",
		"name_ar",
		"description_en",
		"description_ar",
        "status",
        "is_cod",
	];
	static $rules = [
		"name_en"=>'required|max:255',
		"name_ar"=>"required|max:255",
		"description_en"=>"required|string",
		"description_ar"=>"required|string",
        "status"=>"nullable|in:0,1"
	];
	public function tableName():string
	{
		return "branches";
	}
}
