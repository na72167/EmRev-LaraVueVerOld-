<?php

namespace Tests\Feature;

use app\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RegisterApiTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function newUserRegistTest()
    {
        //テストデータ
        $data = [
            'email' => 'dummy@email.com',
            'password' => 'test1234',
            'password_confirmation' => 'test1234',
        ];

        //登録処理を行ったのち,DB内に登録できたか確認。
        $response = $this->json('POST', route('register'), $data);

        $user = User::find($data['email']);
        //テストデータとDB内から引っ張ってきたプロパティを比較する。
        $this->assertEquals($data['email'], $user->name);

        //assertJson・・・対象配列内に指定プロパティが存在するかを確認。
        $response
            ->assertStatus(201)
            ->assertJson(['email' => $user->email]);
    }
}
