<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pelicula;
use App\Models\Categoria;

class PeliculasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       $accion = Categoria::firstOrCreate(['nombre' => 'Acción']);
       $comedia = Categoria::firstOrCreate(['nombre' => 'Comedia']);
       $drama = Categoria::firstOrCreate(['nombre' => 'Drama']);
       $terror = Categoria::firstOrCreate(['nombre' => 'Terror']);
       $cienciaFiccion = Categoria::firstOrCreate(['nombre' => 'Ciencia Ficción']);
       $animacion = Categoria::firstOrCreate(['nombre' => 'Animación']);   

       $peliculas = [
       // --- ACCIÓN (17) ---
       ['nombre'=> 'A todo gas', 'categoria_id' => $accion->id, 'imagen' => null, 'url_imdb' => 'https://www.imdb.com/es-es/title/tt0232500/?ref_=nv_sr_srsg_1_tt_8_nm_0_in_0_q_a%2520todo%2520gas'],
       ['nombre' => 'John Wick', 'categoria_id' => $accion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt2911666/'],
      ['nombre' => 'Fast & Furious 7', 'categoria_id' => $accion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt2820852/'],
      ['nombre' => 'El Caballero Oscuro', 'categoria_id' => $accion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0468569/'],
    ['nombre' => 'Matrix', 'categoria_id' => $accion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0133093/'],
    ['nombre' => 'El caso Bourne', 'categoria_id' => $accion->id, 'imagen' => null, 'url_imdb' => 'https://www.imdb.com/title/tt0372183/'],
       // --- COMEDIA (17) ---
    ['nombre' => 'Resacón en Las Vegas', 'categoria_id' => $comedia->id, 'imagen' => null, 'url_imdb' => 'https://www.imdb.com/title/tt1119646/'],
    ['nombre' => 'Supersalidos', 'categoria_id' => $comedia->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxNDE1MQ@@._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0829482/'],
    ['nombre' => 'Dos tontos muy tontos', 'categoria_id' => $comedia->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BZDQwMjNiMTQtY2UwYy00NjhiLTk0ZWEtZWM5ZWMzNGFjNTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0109686/'],
    ['nombre' => 'Zoolander', 'categoria_id' => $comedia->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BODI4NDY2NDM5M15BMl5BanBnXkFtZTgwNzEwOTMxMDE@._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0249212/'],
    ['nombre' => 'Borat', 'categoria_id' => $comedia->id, 'imagen' => null, 'url_imdb' => 'https://www.imdb.com/title/tt0443453/'],
    ['nombre' => 'Ted', 'categoria_id' => $comedia->id, 'imagen' => null, 'url_imdb' => 'https://www.imdb.com/title/tt1637725/'],
       // --- DRAMA (16) ---
    ['nombre' => 'El Padrino', 'categoria_id' => $drama->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0068646/'],
    ['nombre' => 'El club de la lucha', 'categoria_id' => $drama->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0137523/'],
    ['nombre' => 'Joker', 'categoria_id' => $drama->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt7286456/'],
    ['nombre' => 'El lobo de Wall Street', 'categoria_id' => $drama->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0993846/'],

       // --- TERROR (16) ---
    ['nombre' => 'Expediente Warren: The Conjuring', 'categoria_id' => $terror->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt1457767/'],
    ['nombre' => 'Posesión infernal: El despertar', 'categoria_id' => $terror->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt13345602/'],
    ['nombre' => 'Terrifier 2', 'categoria_id' => $terror->id, 'imagen' => null, 'url_imdb' => 'https://www.imdb.com/title/tt10403420/'],

       // --- CIENCIA FICCIÓN (16) ---
    ['nombre' => 'Origen', 'categoria_id' => $cienciaFiccion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt1375666/'],
    ['nombre' => 'Matrix', 'categoria_id' => $cienciaFiccion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0133093/'],
    ['nombre' => 'Marte (The Martian)', 'categoria_id' => $cienciaFiccion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt3659388/'],
    ['nombre' => 'Avatar', 'categoria_id' => $cienciaFiccion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0499549/'],
    ['nombre' => 'Regreso al futuro', 'categoria_id' => $cienciaFiccion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0088763/'],
    ['nombre' => 'Todo a la vez en todas partes', 'categoria_id' => $cienciaFiccion->id, 'imagen' => null, 'url_imdb' => 'https://www.imdb.com/title/tt6710474/'],

       // --- ANIMACIÓN (16) ---
    ['nombre' => 'Spider-Man: Un nuevo universo', 'categoria_id' => $animacion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt4633694/'],
    ['nombre' => 'El Rey León', 'categoria_id' => $animacion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt0110357/'],
    ['nombre' => 'Del revés (Inside Out)', 'categoria_id' => $animacion->id, 'imagen' => 'https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg', 'url_imdb' => 'https://www.imdb.com/title/tt2096673/'],
       ];
       foreach ($peliculas as $pelicula) {
           Pelicula::create($pelicula);
    
           }
           $this->command->info('Películas agregadas con éxito.');
    }

}
