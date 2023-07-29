<?php

namespace App\Http\Controllers;

use App\DataTables\CategoryDatatables;

class CategoryController extends Controller
{
    public function index()
    {
        return app(CategoryDatatables::class)->render("categories.index");

    }
}
