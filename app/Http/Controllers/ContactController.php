<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\MessageBag;

class ContactController extends Controller{

    public function store( Request $request){
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required|max:10',
            'message'=>'required'
        ]);


        $contact = Contact::create([
            'name'=>$request['name'],
            'phone'=>$request['phone'],
            'email'=>$request['email'],
            'message'=>$request['message']
        ]);

        return redirect('contact');
    }

}