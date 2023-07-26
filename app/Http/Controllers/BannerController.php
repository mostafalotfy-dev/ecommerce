<?php

namespace App\Http\Controllers;

use App\Repositories\BannerRepository;


class BannerController extends Controller
{
    public function __construct(public BannerRepository $BannerControllerRepository)
    {

    }
}
