<?php

namespace App\Http\Controllers;



use App\Http\Requests\CreateRoleRequest;
use App\Http\Requests\UpdateRoleRequest;
use App\Repositories\RoleRepository;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Database\Query\Builder;
use Illuminate\Foundation\Application;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class AjaxController extends Controller
{
    public  function get_roles(): JsonResponse
    {
        $roles = factory("role")->search(request("q"))->where("id","!=","1")->paginate();



        return \response()->json([
            "results"=>$roles->map(fn($role)=>[
                "text"=>$role->{"name_".app()->getLocale()},
                "id"=>$role->id
            ]),
                "pagination"=>[
                    "hasMore"=>(bool) $roles->count()
                ]
            ]
        );
    }
    public function get_category()
    {

            $response =  factory("category")->search(request("q"))->where("status",1)->paginate();
            return response()->json(
                [
                    "results"=>  $response->map(fn($r)=>[
                        "text"=>$r->{"name_".app()->getLocale()},
                        "id"=>$r->id
                    ]),
                    "pagination"=>[
                        "hasMore"=>(bool) $response->count()
                    ]
                ]

            );

    }
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

        $permissions = factory("permission")->search($searchKeyword);


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
    public function update_admin_status()
    {
        request()->validate([
            "id"=>"required|exists:admins,id",
            "status"=>"required|in:0,1"
        ]);
        $repo = factory("admin")->find(request("id"));
        $admin = $repo->first();

            $repo->update([
                "status"=>request("status")
            ]);

        return \response()->json([
            "status"=>$admin->status
        ]);
    }
    public function update_status($name)
    {
        request()->validate([
           "id"=>"required|integer",
           "status"=>"required|integer|in:0,1"
        ]);
        $repo = factory($name);
        $repo
            ->where("id",request("id"))
            ->update([
            "status"=>request("status")
        ]);
    }
}
