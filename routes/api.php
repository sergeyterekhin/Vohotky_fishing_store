<?php

use App\Http\Controllers\Api\CartController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductsController;
use App\Http\Controllers\Auth\SignInController;
use App\Http\Controllers\Auth\SignOutController;
use App\Http\Controllers\Auth\RegController;
use App\Http\Controllers\Auth\MeController;
use App\Http\Controllers\Auth\ConfirmEmailController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::group(['prefix'=>'auth'],function(){
Route::post('registr',RegController::class);
Route::post('signin',SignInController::class);
Route::post('signout',SignOutController::class);
Route::post('changepassword',[ConfirmEmailController::class,'changePassword']);
Route::post('sendMessageOnEmail',[ConfirmEmailController::class,'sendMessageOnEmail']);
Route::patch('changeUserData',[ConfirmEmailController::class,'changeUserData']);
Route::get('me',MeController::class);
Route::get('confirmaccount/{verificated_key}',[ConfirmEmailController::class,'accept']);
});

// Route::middleware(['isAdmin'])->group(['prefix'=>'admin'],function(){

// });

Route::apiResource('category',CategoryController::class);
Route::get('products/{category}/{id}',[ProductsController::class,'showOne'])->name('products.showOne');

Route::apiResource('products',ProductsController::class);
Route::apiResource('cart',CartController::class);
Route::get('carts/user',[CartController::class,'showUserCart'])->name('cart.showUserCart');