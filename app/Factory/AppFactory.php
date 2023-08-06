<?php


namespace App\Factory;
use App\Comparator\Comparator;
use App\Repositories\AdminRepository;
use App\Repositories\BannerRepository;
use App\Repositories\CategoryRepository;
use App\Repositories\ImageRepository;
use App\Repositories\LangRepository;
use App\Repositories\PermissionRepository;
use App\Repositories\PermissionRoleRepository;
use App\Repositories\ProductInfoRepository;
use App\Repositories\RoleRepository;
use App\Repositories\SettingRepository;
use Illuminate\Support\Facades\Lang;
use App\Repositories\OfferRepository;
use App\Repositories\BrandRepository;
use App\Repositories\BranchRepository;


class AppFactory {

    public function compare()
    {
        return app(Comparator::class);
    }
    public function admin():AdminRepository
    {
        return app(AdminRepository::class);
    }
    public function banner():BannerRepository
    {
        return app(BannerRepository::class);
    }
    public function role():RoleRepository
    {
        return app(RoleRepository::class);

    }
    public function category():CategoryRepository
    {
        return app(CategoryRepository::class);
    }

    public function product_info():ProductInfoRepository
    {
        return app(ProductInfoRepository::class);
    }
    public function lang():LangRepository
    {
        return LangRepository::getInstance();
    }
    public function  settings(): SettingRepository
    {
        return SettingRepository::getInstance();
    }
    public function image():ImageRepository
    {
        return app(ImageRepository::class);
    }
    public function permission():PermissionRepository
    {
        return app(PermissionRepository::class);
    }
    public function permission_role():PermissionRoleRepository
    {
        return app(PermissionRoleRepository::class);
    }
    public function branch()
    {
	    return app(BrandRepository::class);

    }
    public function brand()
    {
	    return app(BranchRepository::class);
    }
    public function offer()
    {
	    return app(OfferRepository::class);
    }
}
