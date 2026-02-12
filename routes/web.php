<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PeliculaController;
use App\Http\Controllers\CategoriaController;

Route::get('/', [PeliculaController::class,'portada'])->name('portada');

Route::prefix('api')->group(function () {
    Route::get('/peliculas', [PeliculaController::class,'list'])->name('api.peliculas.list'); 
    Route::get('/categorias/{Id}/peliculas', [CategoriaController::class,'peliculas'])->name('api.categorias.peliculas');
    Route::get('/categorias', [CategoriaController::class, 'index']);
});
