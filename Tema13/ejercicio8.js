"use strict";
// Ejercicio 8 - Manejo de errores
var _a;
function doblarPositivo(n) {
    if (n < 0) {
        throw new Error('El número no puede ser negativo');
    }
    return n * 2;
}
(_a = document.getElementById('btnEjercicio8')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    console.log('=== EJERCICIO 8 - MANEJO DE ERRORES ===');
    // Llamada con número positivo
    try {
        const resultado = doblarPositivo(5);
        console.log('Resultado con 5:', resultado);
    }
    catch (error) {
        console.error('Error:', error);
    }
    // Llamada con número negativo
    try {
        const resultado = doblarPositivo(-3);
        console.log('Resultado con -3:', resultado);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error capturado:', error.message);
        }
    }
});
