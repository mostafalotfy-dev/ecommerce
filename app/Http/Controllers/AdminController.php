<?php

namespace App\Http\Controllers;

use App\DataTables\AdminDataTable;
use App\Http\Requests\CreateAdminRequest;

use App\Models\Admin;


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
            $input = $request->except("_token","_method","save_and_edit","save");
            if(isset($input["password"]))
            {
                $input["password"] = bcrypt($request->password);
            }
            $image->add($input);
            factory("admin")->insertGetId($input);
            return request("save_and_edit") == lang("save_and_edit") ? to_route("admins.create") : to_route("admins.index");
        }
        public function edit(Admin $admin)
        {
            $role = $admin->role;
            return view("admins.edit",[
                "admin"=>$admin,
                "roles"=>[$role->id=>$role->{"name_".app()->getLocale()}]
            ]);

        }
        public function update(Admin $admin)
        {
            $admin->delete();
            return back();
        }
}
