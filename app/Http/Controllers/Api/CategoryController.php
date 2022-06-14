<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function add(Request $request){
        $validator = Validator::make($request->all(), [
            'name_ru' => 'required|min:3|unique:category,name_ru',
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
    $enName=Controller::Translate($request->name_ru);
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

    

    $newProduct=new Category();
    $newProduct->name_ru=$request->name_ru;
    $newProduct->name_en=$enName;
    if($enphoto==null) $newProduct->image_name=$enphoto; else $newProduct->image_name=$enphoto."".$formatphoto;
    $newProduct->save();

    return response()->json(["name"=>$enphoto,"folder"=>"/category"],201);
    }
    
    public function showall(Request $request)
    {
        $result=null;
     if ($request->has('paginate'))
      { 
           $result=Category::select('id','name_ru','name_en','image_name')->paginate(5);
        }else{
            $result=Category::all();
        }
     return response()->json(['categories'=> $result],200);
    }
    public function indexHaveProduct(){
        $result=Category::all();
        $result2=[];
        foreach ($result as $key => $value) {
            if($value->products->isNotEmpty()) array_push($result2,$value); 
        }
        return response()->json([
            'categories'=> $result2
        ]);
    }

    public function GetOneCategory($id){
        $result=Category::select('id','name_ru','image_name')->findOrFail($id);
        return response()->json(
           $result,
        );
    }

    public function delete($id){
        Category::find($id)->delete();
    }

    public function update(Request $request,$id){
        $validator = Validator::make($request->all(), ['name_ru' => 'required|min:3',]);
    $newCategory=Category::findOrFail($id);
    if($request->image_name!=null && $newCategory->image_name!=$request->image_name){
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
        $newCategory->name_en=Controller::Translate($request->name_ru);
        if ($request->image_name!=null && $newCategory->image_name!=$request->image_name){
            switch ($request->image_name) {
                case 'image/jpg':
                    $newCategory->image_name=$newCategory->name_en.'.jpg';
                    break;
                case 'image/jpeg':
                    $newCategory->image_name=$newCategory->name_en.'.jpg';
                    break;
                
                case 'image/png':
                    $newCategory->image_name=$newCategory->name_en.'.png';
                    break;

                default: break;
            }
            $flagPicture=true;
        }
        if ($request->image_name==null)  $newCategory->image_name=null;
        $newCategory->name_ru=$request->name_ru;
        $newCategory->save();
        if($flagPicture) return response()->json(["name"=>$newCategory->name_en,"folder"=>"/category"],201);
        return response()->json(["name"=>null],201);
    }
}
