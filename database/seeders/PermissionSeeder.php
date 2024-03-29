<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \Schema::disableForeignKeyConstraints();

        Permission::truncate();
        factory('permission_role')->truncate();
        $role = Admin::find(1)->role;

        $permission_names = [
            ['name_en' => 'roles', 'name_ar' => 'الأدوار'],
            ['name_en' => 'products', 'name_ar' => 'المنتجات'],
            ['name_en' => 'categories', 'name_ar' => 'الأقسام'],
            ['name_en' => 'orders', 'name_ar' => 'الطلبات'],
            ['name_en' => 'images', 'name_ar' => 'الصور'],
            ['name_en' => 'languages', 'name_ar' => 'اللغات'],
            ['name_en' => 'brands', 'name_ar' => 'براند'],
            ['name_en' => 'branches', 'name_ar' => 'الفروع'],
            ['name_en' => 'shipping', 'name_ar' => 'الشحن'],
            ['name_en' => 'settings', 'name_ar' => 'الاعدادات'],
            ['name_en' => 'shipment_companies', 'name_ar' => 'شركات الشحن'],
            ['name_en' => 'shipping_zones', 'name_ar' => 'مناطق الشحن'],
            ['name_en' => 'customers', 'name_ar' => 'العملاء'],
            ['name_en' => 'invoices', 'name_ar' => 'الفواتير'],
            ['name_en' => 'offers', 'name_ar' => 'العروض'],
            ['name_en' => 'cities', 'name_ar' => 'المدن'],
            ['name_en' => 'admins', 'name_ar' => 'المدراء'],
            ['name_en' => 'countries', 'name_ar' => 'الدول'],
            ['name_en' => 'banners', 'name_ar' => 'بانر'],

        ];
        $permissions = [];
        foreach (['create', 'view', 'update', 'delete'] as $name) {
            foreach ($permission_names as $key => $permission_name) {
                $permissions['name_en'][] = $name.'-'.$permission_name['name_en'];

            }

        }
        foreach (['إنشاء', 'عرض', 'تحديث', 'مسح'] as $name) {
            foreach ($permission_names as $permission_name) {
                $permissions['name_ar'][] = $name.'-'.$permission_name['name_ar'];
            }
        }
        $p = [];
        foreach ($permissions['name_en'] as $key => $permission) {
            $p[] = [
                'name_en' => $permission,
                'name_ar' => $permissions['name_ar'][$key],

            ];

        }

        foreach ($p as $permission) {

            $role->permissions()->create($permission);

        }

        \Schema::enableForeignKeyConstraints();

    }
}
