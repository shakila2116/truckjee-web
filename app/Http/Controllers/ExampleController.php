<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ExampleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    public function postLoad(Request $request){
        dd($request->all());

    }

    public function findLoad(){
        dd("findload");
    }
    //
}
