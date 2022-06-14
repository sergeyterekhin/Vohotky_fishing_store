<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Mail\RememberPassword;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ConfirmEmailController extends Controller
{
    public function accept($verificated_key)
    {
        $user=User::where('verfication_code','=',$verificated_key)->first();
        if($user!=null){
        if($user->verficated=="true"){
        return response()->json([
            'message' => $verificated_key,
            'action' => 1,
            ],201);
        }
        $user->verficated="true";
        $user->verfication_code=NULL;
        $user->save();
        return response()->json([
        'message' => 'account verficated',
        'action' => 2,
        ],201);
        }
         return response()->json([
          'message'=> "Not found"
            ],404); 
        
    }

    public function sendMessageOnEmail(Request $request){
        $user=User::where('email','=',$request->email)->first();
        if($user==null){
            return response()->json([
                'message'=> "User not found"
                  ],401); 
        }
        $user->verfication_code= sha1(time());
        $user->save();
        $data = [
            'name' => $user->name,
            'verification_code' => $user->verfication_code,
            'url' => env('MIX_APP_URL')
        ];
        Mail::to($user->email)->send(new RememberPassword($data));
        return response()->json([
            'message' => 'email send',
            'action' => 2,
            ],201);
    }
 
    public function changePassword(Request $request){
    $validator = Validator::make($request->all(), [
            'password' => 'required|min:6',
            'email' => 'required'   
    ]);
    if ($validator->fails()){
        return response()->json([
             'errors' => $validator->errors()->first('password'),
             'action' => 1,
             'message' => $request->email
            ],418);
    }
        $user = User::where('verfication_code','=',$request->email)->first();
        if($user==null){
            return response()->json([
                'errors'=> "User not find",
                'action' => 1,
                'message' => null
                  ],401); 
        }
        $user->password=bcrypt($request->password);
        $user->verfication_code=NULL;
        $user->save();
        return response()->json([
            'message' => 'password has been changed',
            'action' => 3
            ],201);
    }

    public function changeUserData(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3',
            'phone' => 'required|regex:/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,11}(\s*)?$/',
    ]);
    //Если не прошло валидацию (Нужно узнать точную ошибку http)
    if ($validator->fails()){
        return response()->json($validator->errors(),418);
    }
    $user=User::findOrFail($request->user()->id);
    $user->name=$request->name;
    $user->phone=$request->phone;
    $user->save();
    }
}
