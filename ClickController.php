<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;

class ClickController extends Controller{
    function postClick(Request $req){
        $res = DB::insert(
            "insert into clicks(element,page,x,y) values(?,?,?,?)",
            [$req->target,$req->page,$req->x,$req->y]
        );
        echo json_encode(['result' => $res ? 'success' : 'failed']);
    }

    function userClicks(){
        $data = DB::select("select page,element,x,y from clicks");
        return view('clicks')->with('data',json_encode($data));
    }
}
