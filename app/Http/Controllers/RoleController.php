<?php

namespace App\Http\Controllers;

use App\DataTables\RoleDataTable;
use App\Http\Requests\CreateRoleRequest;
use App\Http\Requests\UpdateRoleRequest;
use App\Models\Role;
use App\Repositories\RoleRepository;


class RoleController extends Controller
{

    public function __construct(public RoleRepository $roleRepository)
    {
        $this->middleware("auth:admin");
        $this->middleware("permission:update-roles")->only("update","edit");
        $this->middleware("permission:create-roles")->only("create","store");
        $this->middleware("permission:view-roles")->only("index","show");
        $this->middleware("permission:delete-roles")->only("destroy");


    }
    public function index()
    {

       return request()->ajax() ? app(RoleDataTable::class)->ajax() : app(RoleDataTable::class)->render("roles.index");

    }
    public function create()
    {
        $permissions = cache()->rememberForever("permissions",fn()=>  factory("permission")->get());
        return view("roles.create",compact("permissions"));
    }
    public function store(CreateRoleRequest $request)
    {
        $input = $request->validated();
        $input["guard"] = "admin";
        $this->roleRepository->insert($input);
        return redirect(route("roles.index"));
    }
    public function show(Role $role)
    {

        return view("roles.show",compact("role"));
    }
    public function edit(Role $role)
    {
        $permissions =  factory("permission")->get();

        return view("roles.edit",compact("role","permissions"));
    }
    public function update(UpdateRoleRequest $request,$id)
    {

         factory("role")->updateFields($request->validated(),$id);
         return to_route("roles.index");
    }
    public function destroy(Role $role)
    {
        $role->delete();

        return back();
    }
}
