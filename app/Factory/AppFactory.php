<?php 


namespace App\Factory;
use App\Repositories\AdminRepository;
use App\Repositories\BannerRepository;
use App\Repositories\CategoryRepository;

use App\Repositories\RoleRepository;
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
}