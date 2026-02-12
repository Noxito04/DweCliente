<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Pelicula;

class DeleteAllMovies extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'movies:delete-all';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Elimina todas las películas de la base de datos';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        if ($this->confirm('¿Estás seguro de que quieres eliminar TODAS las películas? Esta acción no se puede deshacer.')) {
            $count = Pelicula::count();
            Pelicula::truncate();
            $this->info("✓ Se han eliminado {$count} películas de la base de datos.");
        } else {
            $this->line('Operación cancelada.');
        }
    }
}
