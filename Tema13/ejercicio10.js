"use strict";
// Ejercicio 10 - Mini proyecto: gestión de alumnos
var _a;
class AlumnoApp {
    constructor(id, nombre, notas) {
        this.id = id;
        this.nombre = nombre;
        this.notas = notas;
    }
    calcularNotaMedia() {
        if (this.notas.length === 0)
            return 0;
        const suma = this.notas.reduce((total, nota) => total + nota, 0);
        return suma / this.notas.length;
    }
    obtenerResumen() {
        const media = this.calcularNotaMedia();
        return `Alumno: ${this.nombre} (ID: ${this.id}) - Nota media: ${media.toFixed(2)}`;
    }
}
(_a = document.getElementById('btnEjercicio10')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    console.log('=== EJERCICIO 10 - GESTIÓN DE ALUMNOS ===');
    // Crear array de alumnos
    const alumnos = [
        new AlumnoApp(1, 'Alejandor laguardia', [8.5, 9.0, 7.5, 8.0]),
        new AlumnoApp(2, 'Juan verdegay', [6.0, 7.0, 6.5, 7.5]),
        new AlumnoApp(3, 'Manuel robles', [9.5, 9.0, 10.0, 9.2])
    ];
    // Mostrar resumen de cada alumno
    alumnos.forEach(alumno => {
        console.log(alumno.obtenerResumen());
    });
    // Calcular media global
    let sumaMedias = 0;
    for (const alumno of alumnos) {
        sumaMedias += alumno.calcularNotaMedia();
    }
    const mediaGlobal = sumaMedias / alumnos.length;
    console.log(`\nMedia global de todos los alumnos: ${mediaGlobal.toFixed(2)}`);
});
