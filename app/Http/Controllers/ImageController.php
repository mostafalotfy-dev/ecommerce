<?php

namespace App\Http\Controllers;

use App\Repositories\ImageRepository;

class ImageController extends Controller
{
    public function __construct(public ImageRepository $ImageControllerRepository)
    {

    }
}
