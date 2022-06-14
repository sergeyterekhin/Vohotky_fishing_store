<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function store(Request $request)
    {
        $cart = new Cart();
        $cart->user_id = $request->user()->id;
        $cart->quantity = $request->cart['quantity'];
        $cart->product_id = $request->cart['id'];
        $cart->save();
    }


    public function showUserCart(Request $request)
    { 
        if($request->user()==null) 
            return response()->json([
                'totalprice'=> 0,
                'totalquantity' => 0,
                'products_cart' => [] 
            ],200); 
        $get = Cart::where('user_id','=',$request->user()->id)
            ->join('products', 'cart.product_id', '=', 'products.id')
            ->join('category', 'products.category_id', '=', 'category.id')
            ->select('cart.quantity','products.*','category.name_en')
            ->get();
        $quantity_total=0;
        $price_total=0;
        foreach ($get as $product_cart){
         $quantity_total=$quantity_total+$product_cart->quantity;
         $price_total=$price_total+($product_cart->quantity*$product_cart->price);
        }
        return response()->json([
            'totalprice'=> $price_total,
            'totalquantity' => $quantity_total,
            'products_cart' => $get
        ],200); 
    }
    public function update(Request $request, $id)
    {
        $update=Cart::whereRaw('user_id = ? and product_id = ?',[$request->user()->id, $id])->first();
        $update->quantity=$request->quantity;
        $update->save();
    }

    public function destroy($id,Request $request)
    {
        Cart::whereRaw('user_id = ? and product_id = ?', [$request->user()->id,$id])->delete();
    }
}
