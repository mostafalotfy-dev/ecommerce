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
	"open_time",
	"close_time"

	];
	static $rules = [
		"name_en"=>'required|max:255',
		"name_ar"=>"required|max:255",
		"description_en"=>"required|string",
		"description_ar"=>"required|string",
		"status"=>"nullable|in:0,1",
		"open_time"=>"required|before:close_time",
		"close_time"=>"required|after:open_time"
		
	];
	public function tableName():string
	{
		return "branches";
	}
}
