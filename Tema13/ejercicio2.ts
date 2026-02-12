// Ejercicio 2 - Funciones tipadas

function calcularMedia(num1: number, num2: number): number {
    return (num1 + num2) / 2;
}

document.getElementById('btnEjercicio2')?.addEventListener('click', () => {
    console.log('=== EJERCICIO 2 - FUNCIONES TIPADAS ===');
    
    // Llamada correcta
    const resultado: number = calcularMedia(8, 6);
    console.log('Media de 8 y 6:', resultado);
    
    // Llamada incorrecta (comentada para evitar error de compilación)
    // const resultadoErroneo = calcularMedia("8", 6);
    // TypeScript detectará el error: El argumento de tipo 'string' no se puede asignar al parámetro de tipo 'number'
});