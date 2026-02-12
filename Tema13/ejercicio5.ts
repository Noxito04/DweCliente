// Ejercicio 5 - Arrays de interfaces

interface Producto5 {
    id: number;
    nombre: string;
    precio: number;
}

document.getElementById('btnEjercicio5')?.addEventListener('click', () => {
    console.log('=== EJERCICIO 5 - ARRAYS DE INTERFACES ===');
    
    // Array de productos
    const productos: Producto5[] = [
        { id: 1, nombre: 'Pc', precio: 1505.99 },
        { id: 2, nombre: 'Monitor', precio: 899.50 },
        { id: 3, nombre: 'Pack Teclado y Ratón', precio: 255.00 }
    ];
    
    // Recorrer y mostrar cada producto
    productos.forEach(producto => {
        console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}€`);
    });
    
    // Calcular precio total
    let precioTotal: number = 0;
    for (const producto of productos) {
        precioTotal += producto.precio;
    }
    
    console.log(`Precio total: ${precioTotal.toFixed(2)}€`);
});