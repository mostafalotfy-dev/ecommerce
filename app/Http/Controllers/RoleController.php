<?php

namespace App\Http\Controllers;

use App\DataTables\RoleDataTable;
use App\Http\Requests\CreateRoleRequest;
use App\Models\Role;
use App\Repositories\RoleRepository;


class RoleController extends Controller
{
  
    public function __construct(public RoleRepository $roleRepository)
    {

    }
    public function index()
    {
       return app(RoleDataTable::class)->render("roles.index");

    }
    public function create()
    {
        return view("roles.create");
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
    public function destroy(Role $role)
    {
        $role->delete();

        return back();
    }
}
