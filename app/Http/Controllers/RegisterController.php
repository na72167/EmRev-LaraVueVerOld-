<?php

namespace App\Http\Controllers;

use app\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    function register(Request $request){

        Log::debug('登録情報に対してバリテーションを行います。');
        $request->validate([
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);
        $latestUser = User::create([
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
        ]);
        // 登録ユーザーのID情報を持たせて個別マイページへredirectさせる。
        return redirect('/myPage/'.$latestUser->id);

    }
}
