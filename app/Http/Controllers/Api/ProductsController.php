<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{

    public function RandomProduct(Request $request){
        $array=[];
        if($request->has('quantity')) $quantity=$request->quantity; else $quantity=1;
        for ($i=0; $i < $quantity; $i++) { 
            $result=Products::join('category','products.category_id','=','category.id')
            ->orderByRaw("RAND()")
            ->select('products.*','category.name_ru','category.name_en')->limit(4)->get();
            array_push($array,['data'=>$result]);
        }
        return response()->json($array);
    }

    public function newProducts(Request $request)
    {
        $result=Products::join('category','products.category_id','=','category.id')
        ->select('products.*','category.name_ru','category.name_en')
        ->orderBy('created_at','desc');
        if ($result->get()->count() <= 0){
            return response()->json([
                'message'=> "Not found"
            ],404);    
        }
        if ($request->has('limit')){
            $result=$result->limit($request->input('limit'));
        }else {$result=$result->limit(8);}
        $header='Новинки';
        return response()->json([
            'products'=> ['data' => $result->get()],
            'header'=>$header
        ]);
    }

    public function showOne($category,$id){
    $result=Products::where('name_url','=',$id)->get();
    if ($result->count() <= 0){
        return response()->json([
            'message'=> "Not found"
        ],404);    
    }
    $result2=Products::
    join('category','products.category_id','=','category.id')
    ->where('category.name_en','=',$category)->orderByRaw("RAND()")->where('name_url','!=',$id)
    ->select('products.*','category.name_ru','category.name_en')->limit(4)->get();

    return response()->json([
        'data' => $result2,
        'product' => $result,
    ]);
    }


    public function showSearch(Request $request){
        $array=explode(" ",$request->search);
        $search=[];
        foreach ($array as $value) {
        array_push($search,"name like '%{$value}%'");
        }
        $search=implode(" and ", $search);
        $result=Products::join('category','products.category_id','=','category.id')
        ->whereRaw($search)
        ->select('products.*','category.name_ru','category.name_en');
              
              if ($result->get()->count() <= 0)
                return response()->json([
                    'message'=> "Not found",
                    'products' => null,
                    'header'=>'Результаты поиска по запросу "'.$request->search.'"'
                ],400); 

        if($request->has('sort')){
            switch ($request->input('sort')){
                case 'nameup': $result=$result->orderBy('name','asc'); break;
                case 'namedown': $result=$result->orderBy('name','desc'); break;
                case 'priceup': $result=$result->orderBy('price','asc'); break;
                case 'pricedown': $result=$result->orderBy('price','desc'); break;
                case 'news': $result=$result->orderBy('created_at','desc'); break;
                default: break;
            }
        }
        return response()->json([
            'products'=> $result->paginate(12),
            'header'=>'Результаты поиска по запросу "'.$request->search.'"'
        ],200); 
    }

     public function show($id,Request $request)
    {
        $result=Products::
        join('category','products.category_id','=','category.id')
        ->where('category.name_en','=',$id)
        ->select('products.*','category.name_ru','category.name_en');
        if($request->has('sort')){
            switch ($request->input('sort')){
                case 'nameup': $result=$result->orderBy('name','asc'); break;
                case 'namedown': $result=$result->orderBy('name','desc'); break;
                case 'priceup': $result=$result->orderBy('price','asc'); break;
                case 'pricedown': $result=$result->orderBy('price','desc'); break;
                case 'news': $result=$result->orderBy('created_at','desc'); break;
                default: break;
            }
        }
        if ($result->get()->count() <= 0){
            return response()->json([
                'message'=> "Not found"
            ],404);    
        }

        $header=$result->first();
        $header=$header->name_ru;
        return response()->json([
            'products'=> $result->paginate(12),
            'header'=>$header
        ]);
    }
}
