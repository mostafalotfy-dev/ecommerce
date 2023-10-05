<?php

namespace App\Factory;

use App\Comparator\Comparator;
use App\Repositories\AddressRepository;
use App\Repositories\AdminRepository;
use App\Repositories\AttributeRepository;
use App\Repositories\BannerRepository;
use App\Repositories\BranchRepository;
use App\Repositories\BrandRepository;
use App\Repositories\CartRepository;
use App\Repositories\CategoryRepository;
use App\Repositories\CountryRepository;
use App\Repositories\CustomerRepository;
use App\Repositories\FileRepository;
use App\Repositories\ImageRepository;
use App\Repositories\LangRepository;
use App\Repositories\OfferRepository;
use App\Repositories\OrderRepository;
use App\Repositories\PermissionRepository;
use App\Repositories\PermissionRoleRepository;
use App\Repositories\ProductInfoRepository;
use App\Repositories\ResponseRepository;
use App\Repositories\RoleRepository;
use App\Repositories\SettingRepository;
use App\Repositories\ShipmentRepository;

class AppFactory
{
    public function attribute()
    {
        return app(AttributeRepository::class);
    }

    public function shipment()
    {
        return app(ShipmentRepository::class);
    }

    public function address()
    {
        return app(AddressRepository::class);
    }

    public function order()
    {
        return app(OrderRepository::class);
    }

    public function response()
    {
        return app(ResponseRepository::class);
    }

    public function cart()
    {
        return app(CartRepository::class);
    }

    public function customer()
    {
        return app(CustomerRepository::class);
    }

    public function compare()
    {
        return app(Comparator::class);
    }

    public function admin(): AdminRepository
    {
        return app(AdminRepository::class);
    }

    public function banner(): BannerRepository
    {
        return app(BannerRepository::class);
    }

    public function role(): RoleRepository
    {
        return app(RoleRepository::class);

    }

    public function category(): CategoryRepository
    {
        return app(CategoryRepository::class);
    }

    public function product_info(): ProductInfoRepository
    {
        return app(ProductInfoRepository::class);
    }

    public function lang(): LangRepository
    {
        return LangRepository::getInstance();
    }

    public function settings(): SettingRepository
    {
        return SettingRepository::getInstance();
    }

    public function image(): ImageRepository
    {
        return app(ImageRepository::class);
    }

    public function permission(): PermissionRepository
    {
        return app(PermissionRepository::class);
    }

    public function permission_role(): PermissionRoleRepository
    {
        return app(PermissionRoleRepository::class);
    }

    public function branch()
    {
        return app(BranchRepository::class);

    }

    public function brand()
    {
        return app(BrandRepository::class);
    }

    public function offer()
    {
        return app(OfferRepository::class);
    }

    public function country()
    {
        return app(CountryRepository::class);
    }
    public function files()
    {
        return app(FileRepository::class);
    }
}
