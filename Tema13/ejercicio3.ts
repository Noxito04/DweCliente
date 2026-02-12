// Ejercicio 3 - Parámetros opcionales

function saludar(nombre?: string): void {
    if (nombre) {
        console.log(`Hola, ${nombre}`);
    } else {
        console.log('Hola, invitado');
    }
}

document.getElementById('btnEjercicio3')?.addEventListener('click', () => {
    console.log('=== EJERCICIO 3 - PARÁMETROS OPCIONALES ===');
    
    // Llamada con nombre
    saludar('Jordi');
    
    // Llamada sin nombre
    saludar();
});