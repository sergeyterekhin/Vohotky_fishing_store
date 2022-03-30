<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class SignInController extends Controller
{
    public function __invoke(Request $request)
    {
        $user=new User();
        if (!$token=auth()->attempt($request->only('email','password'))){
            return response("login and password",401);
        };
        
        if(!$user->getVerficatedStatus($request->email)){
            return response("verficated",401);
        }
        return response()->json(compact('token'));
    }
}
