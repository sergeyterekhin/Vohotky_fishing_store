<?php

namespace App\Http\Controllers;
use App\Models\Page_information;
use Illuminate\Http\Request;

class InformationController extends Controller
{
    public function getInformation($id){
        $result=Page_information::find($id);
        return response()->json(['content'=>$result->content,'name'=>$result->name_ru],200); 
    }

    public function Updateinformation($site,Request $request){
        $result=Page_information::findOrFail($site);
        $result->content=$request->content;
        $result->save();
        return response()->json("done",201); 
    }
}
