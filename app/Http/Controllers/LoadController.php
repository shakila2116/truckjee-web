<?php

namespace App\Http\Controllers;


use App\Models\Load;
use App\Models\PostTruck;
use Carbon\Carbon;
use Illuminate\Http\Request;


class LoadController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    public function store(Request $request){

//        try{
         if($request['type'] == 1) {
             $val = $this->postLoad($request);
         }
         if($request['type'] == 2){
             $val = $this->postTruck($request);
         }
//         if($request['type' == 3]){
//             $val = $this->findLoad($request);
//             dd($val);
//             return $val;
//         }
//
//         if($request['type'] == 4){
//             $val = $this->findTruck($request);
//
//             return redirect('/findtruck')->with(['val'=>"jai"]);
//         }
//        } catch (\Exception $e) {
//            dd('try onceagain');
//        }
        return redirect('/');

    }

    public function postLoad($request){
            return Load::create([
                'truck_type' => $request['truck_type'],
                'source' => $request['source'],
                'source_locality' => $request['source_locality'],
                'source_district' => $request['source_district'],
                'source_state' => $request['source_state'],
                'destination' => $request['destination'],
                'destination_locality' => $request['destination_locality'],
                'destination_district' => $request['destination_district'],
                'destination_state' => $request['destination_state'],
                'date_required' => Carbon::createFromFormat('d/m/Y', $request['date']),
                'material' => $request['material'],
                'contactname' => $request['drivername'],
                'contactphone' => $request['driverphone'],
            ]);


    }

    public function postTruck($request){
        $this->validate($request, [
            'truck_number' =>  'unique:post_truck,truck_number',
        ]);
        return PostTruck::create([
            'truck_number'=>$request['truck_number'],
            'model_id'=>$request['truck_type'],
            'formatted_address' => $request['source'],
            'locality' => $request['source_locality'],
            'district' => $request['source_district'],
            'state' => $request['source_state'],
            'contactname' => $request['drivername'],
            'contactphone' => $request['driverphone'],
            'date_required' => Carbon::createFromFormat('d/m/Y', $request['date']),
        ]);
    }

    public function findTruck($request)
    {
        $state = $request['source_state'];
        $district = $request['source_district'];
        $address = $request['source'];
        $type = $request['truck_type'];

        $reports = PostTruck::where('formatted_address', $address)->where('model_id', $type)->get();

        if ($reports->isEmpty()) {
            $reports = PostTruck::Where('district', $district)
                ->get();

            return $reports;
        }
    }
    public function findLoad($request){
        $state = $request['source_state'];
        $district = $request['source_district'];
        $address = $request['source'];
        $type = $request['truck_type'];
        $reports = Load::where('source', $address)->where('truck_type', $type)->get();

        if ($reports->isEmpty()) {
            $reports = Load::Where('source_district', $district)
                ->get();

            return $reports;
        }

    }

}
