<?php

namespace App\Http\Controllers;

use App\Repositories\ProductRepository;


class ProductController extends Controller
{
    public function __construct(public ProductRepository $ProductControllerRepository)
    {

    }
}
