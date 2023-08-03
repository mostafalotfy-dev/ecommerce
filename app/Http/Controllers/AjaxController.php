<?php

namespace App\Http\Controllers;



use App\Http\Requests\CreateRoleRequest;
use App\Http\Requests\UpdateRoleRequest;
use App\Repositories\RoleRepository;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Database\Query\Builder;
use Illuminate\Foundation\Application;
use Illuminate\Http\Response;

class AjaxController extends Controller
{
    public function store_language(): Application|Response|\Illuminate\Contracts\Foundation\Application|ResponseFactory
    {
        request()->validate(
        [
            "key"=>"required|integer",
            "value"=>"required|string"
        ]);

      factory("lang")->updateById(\request("key"),\request("value"));
      return response([

      ],204);
    }


    public function search_language()
    {
        $search_value = str(\request("search"))->replace("-","/");
        return response()->json(

            factory("lang")->search($search_value)->orderBy("id","desc")->paginate()

            );
    }
    public function destroy_language($id)
    {
        factory("lang")
            ->find($id)
            ->delete();
        return \response()->json(
            [
                "message"=>lang("success"),
                "data"=>factory("lang")->paginate()
            ]
        );
    }
    public function get_permissions(string $searchKeyword = null)
    {

        $permissions = factory("permission")->search($searchKeyword)
            ->select("roles.id as role_id","permissions.id as permission_id","permissions.name_en as permission_en","permissions.name_ar as permission_ar","roles.name_en as role_en" , "roles.name_ar as role_ar")
            ->join("permission_role","permissions.id","permission_role.permission_id")
            ->join("roles","roles.id","permission_role.role_id");
        if(request("role"))
        {
            $permissions->where("role_id",request("role"));
        }
        return response()->json(
            [
                "permissions"=> $permissions->get(),

            ]);

    }
    public function add_permission(CreateRoleRequest $request)
    {
        factory("role")->transaction(function(Builder $query){
            $role_id = $query->insertGetId(request()->only("name_en","name_ar"));
            $permissions = collect(request("permissions"))->map(fn($permission)=>[
               "permission_id" =>$permission,
                "role_id"=>$role_id
            ]);

            factory("permission_role")->insert($permissions->toArray());
            return true;
        });
        return response()->json([
            "redirect_to"=>route("roles.index")
        ]);

    }
    public function update_role($id)
    {

    }
    public function add_roles(CreateRoleRequest $request)
    {
        $input = $request->only("name_en","name_ar","admin_id");

      $role_id =  factory("role")->insertGetId($input);

      $permissions = collect($request->permissions)->map(fn(int $permission)=>[

         "role_id"=>$role_id,
          "permission_id"=>$permission,

      ]);

         factory("permission_role")->create($permissions->toArray());

        return \response()->json(lang("done"));

    }
    public function update_status()
    {
        $repo = factory("admin")->find(request("id"));
        $admin = $repo->first();
        if($admin->status === 1)
        {
            $repo->where("status",1)->update([
                "status"=>0
            ]);
        }elseif ($admin->status == 0)
        {
            $repo->where("status",0)->update([
                "status"=>1
            ]);
        }
        return \response()->json([
            "status"=>$admin->status
        ]);
    }
}
