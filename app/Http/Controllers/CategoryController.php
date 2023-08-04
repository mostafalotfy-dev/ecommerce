<?php

namespace App\Http\Controllers;

use App\DataTables\CategoryDatatables;
use App\Models\Category;
use App\Http\Requests\CreateCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;

class CategoryController extends Controller
{
    public function index()
    {
        return app(CategoryDatatables::class)->render("categories.index");
    }
    public function create()
    {
        $categories = factory("category")->take(10)->get()->toArray();

        return view("categories.create",compact("categories"));
    }
    public function store(CreateCategoryRequest $request)
    {

        $input = $request->except("_token","_method","save","save_and_add","category_image");
        image("category_image","images")->add($input);
        factory("category")->create($input);
        return request()->has("save_and_add") ? to_route("category.create") : to_route("category.index");
    }
    public function update(Category $category, UpdateCategoryRequest $request)
    {
        factory("category")->updateFields([
            "name_en"=>$request->name_en,
            "name_ar"=>$request->name_ar,
            "newIndex"=>$request->newIndex,
            "oldIndex"=>$request->oldIndex,
            "category_id"=>$request->category_id
        ]);
        return request("save_and_edit") ? to_route("cateogry.edit",$category->id) : to_route("category.index");
    }
    public function edit(Category $category)
    {
        return view("categories.edit",compact("category"));
    }
    public function show(Category $category)
    {
        return view("categories.show", compact("category"));
    }
    public function destroy(Category $category)
    {
        $category->delete();
        return back();
    }
}
