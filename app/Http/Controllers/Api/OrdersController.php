<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Orders;
use App\Models\Products;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    public function MakeOrder(Request $request){
        $products=$request->data;
        $cartUser=[];
        $payment=$request->type;
        foreach ($products as $key => $value) {
            array_push($cartUser,['id'=>$value['id'],'quantity'=>$value['quantity'],'price'=>$value['price'],'priceall' => $value['price']*$value['quantity']]);
        }

        $del=Cart::where('user_id','=',$request->user()->id)->get();
        foreach ($del as $key => $value) {
            $value->delete();
        }
        
        $result= new Orders();
        $result->products=$cartUser;
        $result->user_id=$request->user()->id;
        $result->total_price=$request->total;
        if($payment=='online') $payment='Оплачено'; else $payment="Не оплачено";
        $result->status_payment=$payment;
        $result->status_order=1;
        $code=$request->user()->id."".rand(100,999);
        $result->code=$code;
        $result->save();

        return response()->json($code,201);
    }

    public function updateStatus(Request $request, $id){
        $result=Orders::find($id);

        switch ($request->status){
            case '1': $result->status_order=1; break;
            case '2': $result->status_order=2; break;
            case '3': $result->status_order=3; break;
            default: return response()->json(['error'=>'invalid status'],401); break;
        }

        $result->save();
    }

    public function getOneOrder($id){
        $result=Orders::find($id);
        $collection=collect();
        foreach ($result->products as $key => $value) {
        $ac=Products::select('name','image_name','name_url')->find($value["id"]);
        $ac->key=$key+1;
        $ac->price=$value['price'];
        $ac->id=$value['id'];
        $ac->quantity=$value['quantity'];
        $collection->push($ac);
        }
        switch ($result->status_order){
            case '1': $result->status_order_ru="Процесс комплектации"; break;
            case '2': $result->status_order_ru="Ожидает выдачи"; break;
            case '3': $result->status_order_ru="Заказ выдан"; break;
            default: break;
        }
        
        $result->products=$collection;
        $result->user;
        return response()->json($result,200);
    }

    public function getOrders(Request $request){
        $result=Orders::select('user_id','total_price','created_at','status_payment','status_order','code');
        if($request->has('status')){
            switch ($request->input('status')){
                case 'new': $result=$result->where('status_order','=','1'); break;
                case 'ready': $result=$result->where('status_order','=','2'); break;
                case 'elder': $result=$result->where('status_order','=','3'); break;
                default: break;
            }
        }
        if($request->has('search')){
        $result->where('code','=',$request->search);
        }
        $result=$result->orderBy('created_at','desc')->paginate(10);
        foreach ($result as $key => $value) {

            switch ($value->status_order){
                case '1': $value->status_order_ru="Процесс комплектации"; break;
                case '2': $value->status_order_ru="Ожидает выдачи"; break;
                case '3': $value->status_order_ru="Заказ выдан"; break;
                default: break;
            }

            $value->id=$value->code;
            $value->user_name=$value->user->name;
            $value->user_phone=$value->user->phone;
            $value->total_price=$value->total_price."₽";
        }
        return response()->json($result,200);
    }

    public function getOrdersforUser(Request $request){
        $result=Orders::select('total_price','created_at','status_payment','status_order','code')
        ->where('user_id','=',$request->user()->id)
        ->orderBy('created_at','desc')
        ->get();
        if ($result==null) return response()->json(null,200);
        foreach ($result as $key => $value) {
            switch ($value->status_order){
                case '1': $value->status_order_ru="Процесс комплектации"; break;
                case '2': $value->status_order_ru="Ожидает выдачи"; break;
                case '3': $value->status_order_ru="Заказ выдан"; break;
                default: break;
            }
        }
        return response()->json($result,200);
    }

    public function getOrderforUser(Request $request,$code){
        $result=Orders::find($code);
        if ($result->user_id!=$request->user()->id) return response()->json(null,404);
        $collection=collect();
        foreach ($result->products as $key => $value) {
        $ac=Products::select('name','image_name','name_url')->find($value["id"]);
        $ac->key=$key+1;
        $ac->price=$value['price'];
        $ac->id=$value['id'];
        $ac->quantity=$value['quantity'];
        $collection->push($ac);
        }    
        switch ($result->status_order){
                case '1': $result->status_order_ru="Процесс комплектации"; break;
                case '2': $result->status_order_ru="Ожидает выдачи"; break;
                case '3': $result->status_order_ru="Заказ выдан"; break;
                default: break;
            }
           
            $result->products=$collection;
            $result->user;
        return response()->json($result,200);
    }
}
