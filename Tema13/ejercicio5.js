"use strict";
// Ejercicio 5 - Arrays de interfaces
var _a;
(_a = document.getElementById('btnEjercicio5')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    console.log('=== EJERCICIO 5 - ARRAYS DE INTERFACES ===');
    // Array de productos
    const productos = [
        { id: 1, nombre: 'Pc', precio: 1505.99 },
        { id: 2, nombre: 'Monitor', precio: 899.50 },
        { id: 3, nombre: 'Pack Teclado y Ratón', precio: 255.00 }
    ];
    // Recorrer y mostrar cada producto
    productos.forEach(producto => {
        console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}€`);
    });
    // Calcular precio total
    let precioTotal = 0;
    for (const producto of productos) {
        precioTotal += producto.precio;
    }
    console.log(`Precio total: ${precioTotal.toFixed(2)}€`);
});
