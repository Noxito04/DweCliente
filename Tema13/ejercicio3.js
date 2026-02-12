"use strict";
// Ejercicio 3 - Parámetros opcionales
var _a;
function saludar(nombre) {
    if (nombre) {
        console.log(`Hola, ${nombre}`);
    }
    else {
        console.log('Hola, invitado');
    }
}
(_a = document.getElementById('btnEjercicio3')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    console.log('=== EJERCICIO 3 - PARÁMETROS OPCIONALES ===');
    // Llamada con nombre
    saludar('Jordi');
    // Llamada sin nombre
    saludar();
});
