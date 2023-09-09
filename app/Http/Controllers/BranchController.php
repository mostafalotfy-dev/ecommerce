<?php

namespace App\Http\Controllers;

use App\DataTables\BranchesDataTable;
use App\Http\Requests\CreateBranchRequest;
use App\Http\Requests\UpdateBranchRequest;
use App\Models\Branch;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;

class BranchController extends Controller
{
    public function index()
    {
        return app(BranchesDataTable::class)->render('branches.index');
    }

    public function show(Branch $branch)
    {
        return view('branches.show', compact('branch'));
    }

    public function create(): View|Application|Factory|\Illuminate\Contracts\Foundation\Application
    {
        return view('branches.create');
    }

    public function store(CreateBranchRequest $request)
    {

        $input = $request->only('name_en', 'name_ar', 'description_en', 'description_ar', 'open_time', 'close_time');

        factory('branch')->create($input);

        return response()->json([
            'redirect_to' => route('branches.index'),
            'message' => lang('success'),
        ]);

    }

    public function edit(Branch $branch)
    {
        return view('branches.edit', compact('branch'));
    }

    public function update(UpdateBranchRequest $request, Branch $branch)
    {

        $branch->update($request->only($branch->getFillable()));

        return \factory('response')->success(route('branches.update', $branch->id), route('branches.index'));
    }

    public function destroy(Branch $branch)
    {
        $branch->delete();

        return back();
    }
}
