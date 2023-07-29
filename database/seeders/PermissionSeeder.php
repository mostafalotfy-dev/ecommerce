<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Permission;
use App\Models\Role;

use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \Schema::disableForeignKeyConstraints();
        Role::truncate();
        Permission::truncate();
       $role = Admin::find(1)->role()->create([
            "name_en" => "Admin",
            "name_ar" => "أدمن",
            "admin_id"=>1

        ]);
        $permission_names = [
            ["name_en" => "roles", "name_ar" => "الأدوار"],
            ["name_en" => "products", "name_ar" => "المنتجات"],
            ["name_en" => "categories", "name_ar" => "الأقسام"],
            ["name_en" => "orders", "name_ar" => "الطلبات"],
            ["name_en" => "images", "name_ar" => "الصور"],
        ];
        $permissions = [];
        foreach (["create", "view", "update", "delete"] as $name) {
            foreach ($permission_names as $key => $permission_name) {
                $permissions["name_en"][] = $name . "-" . $permission_name["name_en"];
               
            }

        }
        foreach(["إنشاء","عرض","تحديث","مسح"] as $name)
        {
            foreach($permission_names as $permission_name)
            {
                $permissions["name_ar"][] = $name."-". $permission_name["name_ar"];
            }
        }
        $p = [];
        foreach ($permissions["name_en"] as $key => $permission) {
            $p[] = [
                "name_en" => $permission,
                "name_ar" => $permissions["name_ar"][$key],
                
            ];


        }
        foreach ($p as $permission) {

            $role->permissions()->create($permission);
          
        }

        
        \Schema::enableForeignKeyConstraints();

    }

}