// Ejercicio 1 - Tipos básicos

document.getElementById('btnEjercicio1')?.addEventListener('click', () => {
    console.log('=== EJERCICIO 1 - TIPOS BÁSICOS ===');
    
    // Declaración de variables con tipos
    let nombreAlumno: string = 'Jordi Márquez';
    let edad: number = 21;
    let estaMatriculado: boolean = true;
    let notas: number[] = [8.5, 7.0, 9.2, 6.8, 8.0];
    const centroEducativo: string = 'Medac Nevada';
    
    // Mostrar información por consola
    console.log('Nombre del alumno:', nombreAlumno);
    console.log('Edad:', edad);
    console.log('Está matriculado:', estaMatriculado);
    console.log('Notas:', notas);
    console.log('Centro educativo:', centroEducativo);
});