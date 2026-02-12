// Ejercicio 7 - Clases e interfaces

interface Empleado {
    id: number;
    nombre: string;
    sueldoMensual: number;
}

class EmpleadoEmpresa implements Empleado {
    id: number;
    nombre: string;
    sueldoMensual: number;
    
    constructor(id: number, nombre: string, sueldoMensual: number) {
        this.id = id;
        this.nombre = nombre;
        this.sueldoMensual = sueldoMensual;
    }
    
    calcularSueldoAnual(): number {
        return this.sueldoMensual * 12;
    }
}

document.getElementById('btnEjercicio7')?.addEventListener('click', () => {
    console.log('=== EJERCICIO 7 - CLASES E INTERFACES ===');
    
    const empleado = new EmpleadoEmpresa(101, 'Juan verdegay', 2500);
    
    console.log(`Empleado: ${empleado.nombre}`);
    console.log(`Sueldo mensual: ${empleado.sueldoMensual}€`);
    console.log(`Sueldo anual: ${empleado.calcularSueldoAnual()}€`);
});