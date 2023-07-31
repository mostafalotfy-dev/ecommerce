<?php

namespace App\Http\Controllers;



use App\Http\Requests\CreateRoleRequest;
use Illuminate\Contracts\Routing\ResponseFactory;
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
    public function get_language()
    {

        return response()->json([
            "data"=>factory("lang")->orderBY("id","desc")->paginate()
        ]);
    }

    public function search_language()
    {
        $search_value = str(\request("search"))->replace("-","/");
        return response()->json(

            factory("lang")->search($search_value)->orderBy("id","desc")->get()

            );
    }
    public function get_permissions(string $searchKeyword = null)
    {
        $result = factory("permission")->search($searchKeyword)->paginate();
        return response()->json($result);

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
