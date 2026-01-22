"use strict";
// Ejercicio 4 - Interfaces como tipo
var _a;
(_a = document.getElementById('btnEjercicio4')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    console.log('=== EJERCICIO 4 - INTERFACES COMO TIPO ===');
    // Objeto correcto
    const producto = {
        id: 1,
        nombre: 'Monitor curvo',
        precio: 899.99
    };
    console.log('Producto:', producto);
    // Objeto incorrecto (comentado para evitar error de compilación)
    // const productoIncorrecto: Producto = {
    //     id: 2,
    //     nombre: 'Ratón'
    //     // Falta la propiedad 'precio'
    // };
    // TypeScript detectará el error: Falta la propiedad 'precio' en el tipo
});
