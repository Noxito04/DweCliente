<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pelicula extends Model
{
    protected $fillable = [
        'nombre',
        'categoria_id',
        'imagen',
        'url_imdb'
    ];

    public function categoria()
    {
        return $this->belongsTo(Categoria::class);
    }
    
}
