<?php

namespace App\Http\Controllers;

use App\DataTables\ProductDatatables;
use App\Http\Requests\CreateProductRequest;

class ProductController extends Controller
{
    public function index()
    {
        return app(ProductDatatables::class)->render('products.index');
    }

    public function create()
    {
        return view('products.create');
    }

    public function store(CreateProductRequest $request)
    {

    }
}
