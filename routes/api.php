<?php

use App\Http\Controllers\AjaxController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

    Route::post("ajax/language", [AjaxController::class, "store_language"]);
    Route::delete("ajax/language/{id}", [AjaxController::class, "destroy_language"]);
    Route::get("ajax/language/{search?}", [AjaxController::class, "search_language"]);
    Route::get("ajax/categories", [AjaxController::class, "get_category"])->name("category.get");
    Route::get("ajax/permissions/{search?}", [AjaxController::class, "get_permissions"]);
    Route::post("ajax/permissions", [AjaxController::class, "add_permission"]);
    Route::put("ajax/roles/{role}", [AjaxController::class, "update_role"])->name("update_role");
    Route::post("ajax/roles", [AjaxController::class, "add_roles"]);
    Route::get("ajax/roles", [AjaxController::class, "get_roles"])->name("roles.get");
    Route::put("ajax/update/status", [AjaxController::class, "update_admin_status"]);
    Route::put("ajax/update/{name}/status", [AjaxController::class, "update_status"]);
    Route::get("ajax/update/cod/{status}/{id}", [AjaxController::class, "update_cod"]);


