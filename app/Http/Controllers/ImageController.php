<?php

namespace App\Http\Controllers;

use App\Http\Resources\ImageResource;
use App\Models\Image;
use Illuminate\Http\JsonResponse;

class ImageController extends Controller
{
    public function index()
    {
        if (request()->ajax()) {
            return response()->json([
                'results' =>ImageResource::collection(factory("files")->fromDB()->paginate()),
            ]);
        }

        return view('files.index');
    }
    public function show($directory)
    {
        return response()->json([
            "results"=> \Storage::disk("public")->files($directory,true)
        ]);
    }
    public function store(): JsonResponse
    {
        $this->validate(request(), [
            'file' => 'required|image',
        ]);

        $input = request()->all();

        image('file', now()->format('d-m-Y'))->add($input);
        factory('image')->insert([
            'file_name' => $input['file'],
        ]);

        return response()->json();
    }

    public function update($id): JsonResponse
    {
        $input = request()->only('alt', 'description');
        $image = factory('image')->find($id);
        $image->update($input);
        return response()->json($input);

    }

    public function destroy(Image $image)
    {
        image('file', null)->delete($image->file_name);
    }
}
