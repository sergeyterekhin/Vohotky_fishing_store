<?php

use App\Http\Controllers\Api\CartController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductsController;
use App\Http\Controllers\Api\OrdersController;
use App\Http\Controllers\Auth\SignInController;
use App\Http\Controllers\Auth\SignOutController;
use App\Http\Controllers\Auth\RegController;
use App\Http\Controllers\Auth\MeController;
use App\Http\Controllers\Auth\ConfirmEmailController;
use App\Http\Controllers\InformationController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\AproductsController;
use App\Http\Controllers\Admin\StorageController;
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

//==========================Админка========================================================
Route::group(['middleware'=>'isAdmin','prefix'=>'admin'],function(){
//==========================Работа с пользователем========================================================
Route::get('users',[UserController::class,'GetUsers']);
Route::get('user/{id}',[UserController::class,'GetOneUser']);
Route::patch('user/{id}',[UserController::class,'EditUser']);
Route::delete('users/{id}',[UserController::class,'DeleteUser']);
//==========================Работа с товарами на сайте========================================================
Route::get('products',[AproductsController::class,"GetProducts"]);
Route::get('products/{id}',[AproductsController::class,'GetOneProducts']);
Route::post('products',[AproductsController::class,"addProduct"]);
Route::patch('products/{id}',[AproductsController::class,'EditProduct']);
Route::delete('products/{id}',[AproductsController::class,'DeleteProducts']);
//==========================Работа с информацией на сайте========================================================
Route::patch('pginform/{site}',[InformationController::class,'Updateinformation']);
//==========================Работа с категориями========================================================
Route::get('category',[CategoryController::class,'showall']);
Route::get('category/{id}',[CategoryController::class,'GetOneCategory']);
Route::patch('category/{id}',[CategoryController::class,'update']);
Route::post('category',[CategoryController::class,"add"]);
Route::delete('category/{id}',[CategoryController::class,'delete']);
//==========================Загрузка фотографий на сервер========================================================
Route::post('upload_file',[StorageController::class,"upload"]);
//==========================Заказы========================================================
Route::get('orders',[OrdersController::class,'getOrders']);
Route::get('order/{id}',[OrdersController::class,'getOneOrder']);
Route::patch('order/{id}',[OrdersController::class,'updateStatus']);
});

//==========================Авторизация регистрация и тп========================================================
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
//==========================Оформление заказа========================================================
Route::post('order',[OrdersController::class,'MakeOrder'])->middleware('isUser');
Route::get('order',[OrdersController::class,'getOrdersforUser']);
Route::get('order/{order}',[OrdersController::class,'getOrderforUser']);
//==========================Категории товаров========================================================
Route::get('categoryproduct',[CategoryController::class,'indexHaveProduct']);
//==========================Товары на сайте========================================================
Route::get('products/{product}',[ProductsController::class,'show']);
Route::get('products/{category}/{id}',[ProductsController::class,'showOne'])->name('products.showOne');
Route::get('products_New',[ProductsController::class,'newProducts'])->name('products.showNew');
Route::get('products_Find/search',[ProductsController::class,'showSearch'])->name('products.showSearch');
Route::get('products_R',[ProductsController::class,'RandomProduct'])->name('products.random');
//==========================Страница информации========================================================
Route::get('pginform/{id}',[InformationController::class,'getInformation']);
//==========================Корзина========================================================
Route::post('cart',[CartController::class,'store'])->name('add_product_to_cart');;
Route::delete('cart/{cart}',[CartController::class,'destroy'])->name('delete_from_cart_user');;
Route::patch('cart/{cart}',[CartController::class,'update'])->name('update_cart_user');;
Route::get('carts/user',[CartController::class,'showUserCart'])->name('cart_user');