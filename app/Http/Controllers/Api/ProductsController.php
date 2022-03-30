<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $result=Products::join('category','products.category_id','=','category.id')
        ->select('products.*','category.name_ru','category.name_en')->orderBy('created_at','desc');
        if ($request->has('limit')){
            $result=$result->limit($request->input('limit'));
        }
        return response()->json([
            'products'=> $result->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @param  int  $сategory
     * @return \Illuminate\Http\Response
     */
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
        'product'=> $result,
        'other' => $result2
    ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id,Request $request)
    {
        if ($id=="news"){
        $result=Products::join('category','products.category_id','=','category.id')
        ->select('products.*','category.name_ru','category.name_en')->limit(6)->orderBy('created_at','desc');
        }
        else
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
    }
        if ($result->get()->count() <= 0){
            return response()->json([
                'message'=> "Not found"
            ],404);    
        }
        return response()->json([
            'products'=> $result->paginate(5),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
