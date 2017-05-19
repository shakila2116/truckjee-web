<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return view('home')->with(['models'=>\Illuminate\Support\Facades\DB::table('truck_models')->get()]);
});

$app->get('/aboutus',function (){
    return view('aboutus');
});

$app->get('/services',function (){
    return view('services');
});

$app->get('/contact',function (){
    return view('contact')->with(['errors'=>null]);
});
$app->get('/terms',function (){
    return view('terms');
});
$app->get('/findtruck',function (){
    return view('findtruck');
});

$app->post('/postload','LoadController@store');
$app->get('/findload','LoadController@findLoad');

$app->post('/contactus','ContactController@store');

