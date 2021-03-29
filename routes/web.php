<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::post('/register','RegisterController@register')->name('register');
Route::get('/logout','LoginController@logout');
Route::post('/login','LoginController@login')->name('login');

Route::get('/myPage/{id}', function () {
    return view('myPage');
});
