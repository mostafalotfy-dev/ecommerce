<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('files.index');
    }

    public function update_alt(Request $request)
    {
        $request->validate([
            "alt"=>"required|string|regex:(^[A-zء-ي])",
            "id"=>"required|integer|exists:images,id",
        ]);
        factory("image")->find($request->id)->update([
            "alt"=>$request->alt
        ]);
        return response()->json();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'file' => 'mimetypes:csv,application/vnd.ms-excel,application/vnd.ms-excel,image/*,video/*,audio/*',
        ]);
        $input = $request->only("file");

        image('file', now()->format('d-m-Y'))->add($input);
        $input["file_name"] = $input["file"];
        unset($input["file"]);
        factory("files")->fromDB()->insert($input);
        return response()->json();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(): JsonResponse
    {
        \request()->validate([
            "id"=>"required|integer",
        ]);
        $model = factory("image")->find(\request("id"));
        $path =  $model->first()->file_name;
        $model->delete();
        unlink(public_path("storage/{$path}"));
        return response()->json();
    }
}
