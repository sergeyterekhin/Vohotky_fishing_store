<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class StorageController extends Controller
{
    public function upload(Request $request){
        $image=$request->file;
        $name=$request->filename.'.'.$image->getClientOriginalExtension();
        $folder=$request->folder;
/** @var Illuminate\Filesystem\FilesystemAdapter */
        $filePath=Storage::disk('public');
        $filePath->putFileAs($folder,$image,$name);
    }

    public function getFile($image_name,Request $request){
        
    }
}
