<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page_information extends Model
{
    use HasFactory;
    protected $table='page_information';
    protected  $primaryKey = 'name';
    public $incrementing = false;
}
