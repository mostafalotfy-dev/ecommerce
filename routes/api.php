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

Route::post("ajax/language",[AjaxController::class,"store_language"]);
Route::get("ajax/language",[AjaxController::class,"get_language"]);
Route::get("ajax/language/{search}",[AjaxController::class,"search_language"]);
Route::get("ajax/permissions",[AjaxController::class,"get_permissions"]);
Route::post("ajax/roles",[AjaxController::class,"add_roles"]);
Route::put("ajax/update/status",[AjaxController::class,"update_status"]);
