<?php

namespace App\Http\Controllers;

use App\DataTables\CategoryDatatables;
use App\Http\Requests\CreateCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;

class CategoryController extends Controller
{
    public function index()
    {

        return app(CategoryDatatables::class)->render('categories.index');
    }

    public function create(): \Illuminate\Contracts\Foundation\Application|Factory|View|Application|JsonResponse
    {

        $categories = factory('category')->take(10)->get();

        return view('categories.create', compact('categories'));
    }

    public function store(CreateCategoryRequest $request): JsonResponse
    {

        $input = $request->except('_token', '_method', 'save', 'save_and_add', 'category_image');
        image('category_image', 'images')->add($input);
        if ($request->status == 'on') {
            $input['status'] = 1;
        } else {
            $input['status'] = 0;
        }
        $input['created_at'] = now();
        factory('category')->insert($input);

        return \factory('response')->success(route('category.index'));
    }

    public function update(Category $category, UpdateCategoryRequest $request): JsonResponse
    {

        $image = image('category_image', 'images');
        $input = $request->except('save_and_more', '_token', '_method', 'save_and_add', 'save');
        if (! $request->status) {
            $input['status'] = 0;
        }
        if ($request->status == 'on') {
            $input['status'] = 1;
        }
        $image->delete($category->category_image);

        $image->add($input);

        $category->update($input);

        return \factory('response')->success(route('category.index'));
    }

    public function edit(Category $category): View|Application|Factory|\Illuminate\Contracts\Foundation\Application
    {
        $categories = factory('category')
            ->where('id', '!=', $category->id)
            ->where('status', 1)
            ->take(10)->get();

        return view('categories.edit', compact('category', 'categories'));
    }

    public function show(Category $category): View|Application|Factory|\Illuminate\Contracts\Foundation\Application
    {
        return view('categories.show', compact('category'));
    }

    public function destroy(Category $category): RedirectResponse
    {
        image('category_image', 'images')->delete($category->category_image);
        $category->delete();

        return back();
    }
}
