<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MeController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api']);
    }
    public function __invoke(Request $request)
    {
        $user=$request->user();
        return response()->json([
            'user'=>['email' => $user->email,
            'name' => $user->name,
            'id' => $user->id,
            'phone' => $user->phone],
            'role' => $user->role
        ]);
    }
}
