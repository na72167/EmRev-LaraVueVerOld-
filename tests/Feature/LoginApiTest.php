<?php

namespace Tests\Feature;

use app\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LoginApiTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        //テストデータ
        $data = [
            'email' => 'dummy@email.com',
            'password' => 'test1234',
        ];

        //ログイン対象データを登録
        $this->json('POST', route('register'), $data);
        //ログイン処理を走らせる。
        $response = $this->json('POST', route('login'), $data);

        $user = User::find($data['name'],$data['password']);
        //テストデータとDB内から引っ張ってきたプロパティを比較する。
        $this->assertEquals($data['name'], $user->name);

        //assertJson・・・対象配列内に指定プロパティが存在するかを確認。
        $response
            ->assertStatus(201)
            ->assertJson(['name' => $user->name]);
    }
}
