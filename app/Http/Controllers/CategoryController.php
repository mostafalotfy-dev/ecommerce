<?php

namespace App\Http\Controllers;

use App\DataTables\CategoryDatatables;
use App\Models\Category;
use App\Http\Requests\CreateCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;

class CategoryController extends Controller
{
    public function index()
    {

        return app(CategoryDatatables::class)->render("categories.index");
    }
    public function create(): \Illuminate\Contracts\Foundation\Application|Factory|View|Application|JsonResponse
    {

        $categories = factory("category")->take(10)->get();

        return view("categories.create",compact("categories"));
    }
    public function store(CreateCategoryRequest $request): RedirectResponse
    {

        $input = $request->except("_token","_method","save","save_and_add","category_image");
        image("category_image","images")->add($input);
        factory("category")->create($input);
        return \factory("response")->success(route("category.index"));
    }
    public function update(Category $category, UpdateCategoryRequest $request): RedirectResponse
    {
        $image = image("category_image","images");
        $input = $request->except("save_and_more","_token","category_image","_method","save_and_add","save");
        $image->delete($category->category_image);
        $image->add($input);

        factory("category")->updateFields($input,$category->id);

        return   to_route("category.index");
    }
    public function edit(Category $category): View|Application|Factory|\Illuminate\Contracts\Foundation\Application
    {
        $categories = factory("category")
            ->where("id","!=" , $category->id)
            ->where("status",1)
            ->take(10)->get();
        return view("categories.edit",compact("category","categories"));
    }


    public function show(Category $category): View|Application|Factory|\Illuminate\Contracts\Foundation\Application
    {
        return view("categories.show", compact("category"));
    }
    public function destroy(Category $category)
    {
        $category->delete();
        image("category_image","images")->delete($category->category_image);
        return back();
    }
}
