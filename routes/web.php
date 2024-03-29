<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RoleController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

//Route::get('/', function () {
//    return view('home');
//});

Auth::routes();
Route::group(['middleware' => ['auth:admin']], fn () => Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home'));
Route::group(['prefix' => LaravelLocalization::setLocale(), 'middleware' => ['auth:admin']], function () {
    Route::resource('roles', RoleController::class);
    Route::resource('category', CategoryController::class);
    Route::get('language', [LanguageController::class, 'index'])->name('language.index');
    Route::resource('admins', AdminController::class);
    Route::resource('branches', BranchController::class);
    Route::resource('customers', CustomerController::class);
    Route::resource('brands', BrandController::class)->except('show');
    Route::resource('products', ProductController::class);
    Route::resource('files', FileController::class)->except("destroy");
    Route::post("files/update_alt",[FileController::class,"update_alt"])->name("files.update_alt");
    Route::delete("files",[FileController::class,"destroy"])->name("files.destroy");
});
