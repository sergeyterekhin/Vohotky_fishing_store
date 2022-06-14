<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Products extends Model
{
    use HasFactory, SoftDeletes;
    protected $table='products';
    protected $dates = ['deleted_at'];
    
    public function category(){
        return $this->belongsTo('App\Models\Category');
    }

    public static function getUniqueUrlStatus($data){
        $name=Products::where('name_url','=',$data)->first();
        if ($name!=null) return true; else return false;   
    }
}
