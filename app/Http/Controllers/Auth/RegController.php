<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\SignupEmail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;

class RegController extends Controller
{
    public function __invoke(Request $request)
    {

        //валидация !!!СДЕЛАТЬ УНИКАЛЬНОСТЬ ЕМАИЛА
        $validator = Validator::make($request->all(), [
                'name' => 'required|min:3',
                'email' => 'required|email',
                'phone' => 'required|regex:/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,11}(\s*)?$/',
                'password' => 'required|min:6',   
        ]);
        //Если не прошло валидацию (Нужно узнать точную ошибку http)
        if ($validator->fails()){
            return response()->json($validator->errors(),418);
        }
        if(User::getEmailStatus($request->email)){
            return response()->json(['email'=>['Такая почта уже существует'],],418); 
        }

        //Добавление пользователя в бд
        $user= new User();
        $user->name = $request->input("name");
        $user->email = $request->input("email");
        $user->phone = $request->input("phone");
        $user->password = bcrypt($request->input("password"));
        $user->verfication_code= sha1(time());
        $user->verficated="false";
        $user->save();
        //Отправка сообщения на почту
        $data = [
            'name' => $user->name,
            'verification_code' => $user->verfication_code,
            'url' => env('MIX_APP_URL')
        ];
        Mail::to($user->email)->send(new SignupEmail($data));

        return response()->json(["status" => 'message send to email user'],201);
    }
}
