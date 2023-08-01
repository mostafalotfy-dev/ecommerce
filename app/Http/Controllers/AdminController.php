<?php

namespace App\Http\Controllers;

use App\DataTables\AdminDataTable;
use App\Http\Requests\CreateAdminRequest;
use App\Http\Requests\UpdateAdminRequest;
use App\Models\Admin;
use Illuminate\Http\Request;

class AdminController extends Controller
{
        public function index()
        {
            return app(AdminDataTable::class)->render("admins.index");
        }
        public function create()
        {
            $roles =  factory("role")->where("id","!=",1)->take(10)->get();
            $arr = [0=>lang("models/admins.fields.role_name")];
            foreach($roles as $role)
            {
                $arr[$role->id] = $role->{"name_".app()->getLocale()};
            }
            return view("admins.create",[
                "roles"=>$arr,
            ]);
        }
        public  function store(CreateAdminRequest $request)
        {

            $image = image("profile_image","images");
            $input = $request->except("_token","_method");
            if(isset($input["password"]))
            {
                $input["password"] = bcrypt($request->password);
            }
            $image->add($input);
             factory("admin")->insertGetId($input);
         return to_route("admins.index");
        }
        public function edit(Admin $admin)
        {
            return view("admins.edit",[
                "admin"=>$admin,
                "roles"=>[$admin->role]
            ]);

        }
}
