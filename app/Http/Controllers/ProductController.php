<?php

namespace App\Http\Controllers;

use App\DataTables\ProductDatatables;
use App\Repositories\ProductRepository;


class ProductController extends Controller
{
    public function index()
    {
        return app(ProductDatatables::class)->render("products.index");
    }
    public function create()
    {

    }

}
