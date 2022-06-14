<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function GetUsers(Request $request){
        $result=User::select('id','name','verficated','email','phone','created_at');
        if($request->has('sort')){
            switch ($request->input('sort')){
                case 'verificated': $result=$result->where('verficated','=','true'); break;
                case 'noverificated': $result=$result->where('verficated','=','false'); break;
                default: break;
            }
        }
        return response()->json([
            'users'=> $result->paginate(10),
        ]);
    }

    public function DeleteUser($id){
    User::find($id)->delete();   
    }

    public function GetOneUser($id){
        $result=User::select('id','name','email','phone')->findOrFail($id);
        return response()->json([
            'users' => $result,
        ]);
    }

    public function EditUser(Request $request,$id){
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3',
            'email' => 'required|email',
            'phone' => 'required|regex:/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,11}(\s*)?$/', 
    ]);
    if ($validator->fails()){
        return response()->json($validator->errors(),418);
    }
     $result=User::findOrFail($id);
     $result->phone=$request->phone;
     $result->name=$request->name;
     $result->save();
    }
}
