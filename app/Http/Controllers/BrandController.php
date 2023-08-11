<?php

namespace App\Http\Controllers;

use App\DataTables\BrandDatatables;
use App\Http\Requests\CreateBrandRequest;
use App\Http\Requests\UpdateBranchRequest;
use App\Http\Requests\UpdateBrandRequest;
use App\Models\Brand;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function index()
    {
        return app(BrandDatatables::class)->render("brands.index");
    }
    public function create()
    {
        return view("brands.create");
    }
    public function store(CreateBrandRequest $request)
    {
        $input = $request->only("name_en","name_ar");
        factory("brand")->create($input);
        return factory("response")->success(route("brands.index"));
    }
    public  function  edit(Brand $brand): View|Application|Factory|\Illuminate\Contracts\Foundation\Application
    {
       return view("brands.edit",compact("brand"));

    }
    public function update(UpdateBrandRequest $request,Brand $brand)
    {
        $brand->update($request->only("name_en","name_ar"));
        return \factory("response")->success(route("brands.index"));
    }
    public function destroy(Brand $brand)
    {
        $brand->delete();
        return back();
    }

}
