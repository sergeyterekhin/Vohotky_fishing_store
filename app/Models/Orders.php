<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;
    protected $table='orders';
    protected  $primaryKey = 'code';
    public $incrementing = false;

    protected $casts = [
        'products' => 'array'
    ];

    public function user(){
        return $this->belongsTo('App\Models\User');
    }
}
