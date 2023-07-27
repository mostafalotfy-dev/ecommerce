<?php


namespace App\Factory;
use App\Repositories\AdminRepository;
use App\Repositories\BannerRepository;
use App\Repositories\CategoryRepository;

use App\Repositories\LangRepository;
use App\Repositories\ProductInfoRepository;
use App\Repositories\RoleRepository;
use App\Repositories\SettingRepository;
use SebastianBergmann\Comparator\Comparator;


class AppFactory {


    public function admin()
    {
        return app(AdminRepository::class);
    }
    public function banner()
    {
        return app(BannerRepository::class);
    }
    public function role()
    {
        return app(RoleRepository::class);

    }
    public function product()
    {
        return app(CategoryRepository::class);
    }
    public function compare()
    {
        return app(Comparator::class);
    }
    public function product_info()
    {
        return app(ProductInfoRepository::class);
    }
    public function lang()
    {
        return app(LangRepository::class);
    }
    public function  settings()
    {
        return app(SettingRepository::class);
    }
}
