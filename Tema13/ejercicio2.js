"use strict";
// Ejercicio 2 - Funciones tipadas
var _a;
function calcularMedia(num1, num2) {
    return (num1 + num2) / 2;
}
(_a = document.getElementById('btnEjercicio2')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    console.log('=== EJERCICIO 2 - FUNCIONES TIPADAS ===');
    // Llamada correcta
    const resultado = calcularMedia(8, 6);
    console.log('Media de 8 y 6:', resultado);
    // Llamada incorrecta (comentada para evitar error de compilación)
    // const resultadoErroneo = calcularMedia("8", 6);
    // TypeScript detectará el error: El argumento de tipo 'string' no se puede asignar al parámetro de tipo 'number'
});
