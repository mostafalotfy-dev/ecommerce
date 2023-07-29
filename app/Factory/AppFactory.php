<?php


namespace App\Factory;
use App\Repositories\AdminRepository;
use App\Repositories\BannerRepository;
use App\Repositories\CategoryRepository;
use App\Repositories\ImageRepository;
use App\Repositories\LangRepository;
use App\Repositories\PermissionRepository;
use App\Repositories\ProductInfoRepository;
use App\Repositories\RoleRepository;
use App\Repositories\SettingRepository;



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
    public function category()
    {
        return app(CategoryRepository::class);
    }
    
    public function product_info()
    {
        return app(ProductInfoRepository::class);
    }
    public function lang()
    {
        return LangRepository::getInstance();
    }
    public function  settings()
    {
        return SettingRepository::getInstance();
    }
    public function image()
    {
        return app(ImageRepository::class);
    }
    public function permission()
    {
        return app(PermissionRepository::class);
    }
}
