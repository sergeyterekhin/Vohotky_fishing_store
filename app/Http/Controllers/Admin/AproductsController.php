<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use Illuminate\Support\Facades\Validator;
use App\Models\Category;
use App\Models\Products;
use Illuminate\Http\Request;

class AproductsController extends Controller
{

    //========================ПОЛУЧИТЬ ВСЕ================================
    public function GetProducts(Request $request){
        $result=Products::select('id','name','slug','description','image_name','created_at','price','category_id');
         if($request->has('sort')){
            $id=(Category::where('name_en','=',$request->sort)->first())->id;
        $result->where('category_id','=',$id);
        }
        if($request->has('search')){
            $array=explode(" ",$request->search);
        $search=[];
        foreach ($array as $value) {
        array_push($search,"name like '%{$value}%'");
        }
        $search=implode(" and ", $search);
        $result->whereRaw($search);
        }
        $result=$result->paginate(5);
        foreach ($result as $key => $value) {
            if($value->category==null) $value->category_name=null; else
            $value->category_name=$value->category->name_ru;
            $value->price=$value->price."₽";
        }
        return response()->json([
            'products'=> $result,
        ]);
    }
    //========================ПОЛУЧИТЬ ОДНУ================================
    public function GetOneProducts($id){
        $result=Products::select('id','name','slug','description','image_name','price','category_id')->findOrFail($id);
        return response()->json([
            'products' => $result,
        ]);
    }

   //=========================УДАЛЕНИЕ================================
    public function DeleteProducts($id){
        Products::find($id)->delete();
        $del=Cart::where('product_id','=',$id)->get();
        foreach ($del as $key => $value) {
            $value->delete();
        }
    }
    //========================ОБНОВЛЕНИЕ================================
    public function EditProduct(Request $request,$id){
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3',
            'description' => 'required|min:10',
            'category_id' => 'required',
            'price' => 'required|integer',
            'slug'=>'required|min:5',
    ]);
    $newProduct=Products::findOrFail($id);
    if($request->image_name!=null && $newProduct->image_name!=$request->image_name){
        $typeimg=['image/jpg','image/jpeg','image/png'];
        if(!in_array($request->image_name,$typeimg)){
            $validator->errors()->add('image_name',"Формат изображения должен быть img,jpg,jpeg.");
            return response()->json($validator->errors(),418);
            }    
        }
        if ($validator->fails()){
            return response()->json($validator->errors(),418);
        }
        $flagPicture=false;
        if ($request->image_name!=null && $newProduct->image_name!=$request->image_name){
            switch ($request->image_name) {
                case 'image/jpg':
                    $newProduct->image_name=$newProduct->name_url.'.jpg';
                    break;
                case 'image/jpeg':
                    $newProduct->image_name=$newProduct->name_url.'.jpg';
                    break;
                
                case 'image/png':
                    $newProduct->image_name=$newProduct->name_url.'.png';
                    break;

                default: break;
            }
            $flagPicture=true;
        }
        if ($request->image_name==null)  $newProduct->image_name=null;
        $newProduct->name=$request->name;
        $newProduct->slug=$request->slug;
        $newProduct->description=$request->description;
        $newProduct->price=$request->price;
        $newProduct->category_id=$request->category_id;
        $newProduct->save();
        if($flagPicture) return response()->json(["name"=>$newProduct->name_url,"folder"=>"/products"],201);
        return response()->json(["name"=>null],201);
    }


   //========================ДОБАВЛЕНИЕ================================
    public function addProduct(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3|unique:products,name',
            'description' => 'required|min:10',
            'category_id' => 'required',
            'price' => 'required|integer',
            'slug'=>'required|min:5',
    ]);

    if($request->image_name!=null){
        $typeimg=['image/jpg','image/jpeg','image/png'];
        if(!in_array($request->image_name,$typeimg)) 
        {
            $validator->errors()->add('image_name',"Формат изображения должен быть img,jpg,jpeg.");
            return response()->json($validator->errors(),418);
        }
        
        }
    if ($validator->fails()){
        return response()->json($validator->errors(),418);
    }
    $enName=Controller::Translate($request->name);
    while(Products::getUniqueUrlStatus($enName)){
        $enName=Controller::Translate($request->name).'-'.rand(0,1000);
    }
    if ($request->image_name==null) $enphoto=null; else{
        switch ($request->image_name) {
            case 'image/jpg':
                $formatphoto='.jpg';
                break;
            case 'image/jpeg':
                $formatphoto='.jpg';
                break;
            
            case 'image/png':
                $formatphoto='.png';
                break;
            
            default: break;
        }
        $enphoto=$enName;
    }

    

    $newProduct=new Products();
    $newProduct->name=$request->name;
    $newProduct->name_url=$enName;
    $newProduct->slug=$request->slug;
    $newProduct->description=$request->description;
    $newProduct->price=$request->price;
    $newProduct->category_id=$request->category_id;
    if($enphoto==null) $newProduct->image_name=$enphoto; else $newProduct->image_name=$enphoto."".$formatphoto;
    $newProduct->save();

    return response()->json(["name"=>$enphoto,"folder"=>"/products"],201);
    }
}
