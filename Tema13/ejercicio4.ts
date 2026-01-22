// Ejercicio 4 - Interfaces como tipo

interface Producto {
    id: number;
    nombre: string;
    precio: number;
}

document.getElementById('btnEjercicio4')?.addEventListener('click', () => {
    console.log('=== EJERCICIO 4 - INTERFACES COMO TIPO ===');
    
    // Objeto correcto
    const producto: Producto = {
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