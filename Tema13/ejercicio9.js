"use strict";
// Ejercicio 9 - Uso de unknown
var _a;
function toUpperSeguro(valor) {
    if (typeof valor === 'string') {
        return valor.toUpperCase();
    }
    else {
        throw new Error('El valor no es un string');
    }
}
(_a = document.getElementById('btnEjercicio9')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    console.log('=== EJERCICIO 9 - USO DE UNKNOWN ===');
    // Llamada con string
    try {
        const resultado = toUpperSeguro('hola mundo');
        console.log('Resultado con string:', resultado);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error:', error.message);
        }
    }
    // Llamada con número
    try {
        const resultado = toUpperSeguro(123);
        console.log('Resultado con número:', resultado);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error capturado:', error.message);
        }
    }
});
