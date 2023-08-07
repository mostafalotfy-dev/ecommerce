<?php

namespace App\Http\Controllers;

use App\DataTables\AdminDataTable;
use App\Http\Requests\CreateAdminRequest;

use App\Http\Requests\UpdateAdminRequest;
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

                $input["password"] = bcrypt($request->password);

            $image->add($input);
            factory("admin")->insertGetId($input);
            return factory("response")->success(route("admins.create"),route("admins.index"));
        }
        public function edit(Admin $admin)
        {
            $role = $admin?->role;
            return view("admins.edit",[
                "admin"=>$admin,
                "roles"=>[$role?->id=>$role?->{"name_".app()->getLocale()}]
            ]);

        }
        public function update(UpdateAdminRequest $request ,$id)
        {
            $admin = factory("admin")->find($id);
            $input = $request->except("_token","_method","save");

            if ($request->password)
            {
                $input["password"]=bcrypt($request->password);
            }else{
                unset($input["password"]);
            }
            image("profile_image","images")->delete($admin->first()->profile_image);
            image("profile_image","images")->add($input);
            $admin->update($input);

            return factory("response")->success(route("admins.edit",$id),route("admins.index"));
        }
        public  function show(Admin $admin)
        {
            return view("admins.show",compact("admin"));
        }
        public function destroy(Admin $admin)
        {
            $admin->delete();
            image("profile_image","images")->delete($admin->profile_image);
            return back();
        }
}
