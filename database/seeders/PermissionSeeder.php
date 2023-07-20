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
       $role =  Role::create([
            "name_en"=>"Admin",
            "name_ar"=>"ادمن",
            "guard_name"=>"admin"
        ]);
        $permission_en = [
            "roles",
            "products",
            "categories",
            "orders",
            "images",
            
        ];
        $permission_ar = [
            "الأدوار",
            "المنتجات",
            "الأقسام",
            "الطلبات",
            "الصور",
            
        ];
        $permissions = [];
        foreach($permission_en as $key => $keyword){

            foreach(["create","view","update","delete"] as $permission)
            {
                $permissions[$key]["name_en"] = $keyword . " ".  $permission;
            }
               
        }
        foreach($permission_ar as $key => $keyword)
        {
            foreach(["إنشاء","عرض", "تحديث", "مسح"] as $permission)
            {
                $permissions[$key]["name_ar"] = $keyword . " ".  $permission;
            }
        }
        foreach ($permissions as $p)
        {
            $perm = Permission::create([
                "name_en"=>$p["name_en"],
                "name_ar"=>$p["name_ar"],
                "guard_name"=>"admin"
            ]);
            $role->givePermissionTo($perm);
        }
        
        Admin::find(1)->assignRole($role);
        \Schema::enableForeignKeyConstraints();
    }
    protected function addPermission($permission_ar,$permission_en,$role,array $permissionTypeArr,$lang)
    {
        foreach($permission_en as $permission)
        {
            foreach($permissionTypeArr as $keyword )
            {
                $role->givePermissionTo(Permission::create(["name_en"=>$keyword . " " . $permission,""]));
            }
        }
    }
}
