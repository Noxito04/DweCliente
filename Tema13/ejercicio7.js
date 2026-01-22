"use strict";
// Ejercicio 7 - Clases e interfaces
var _a;
class EmpleadoEmpresa {
    constructor(id, nombre, sueldoMensual) {
        this.id = id;
        this.nombre = nombre;
        this.sueldoMensual = sueldoMensual;
    }
    calcularSueldoAnual() {
        return this.sueldoMensual * 12;
    }
}
(_a = document.getElementById('btnEjercicio7')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    console.log('=== EJERCICIO 7 - CLASES E INTERFACES ===');
    const empleado = new EmpleadoEmpresa(101, 'Juan verdegay', 2500);
    console.log(`Empleado: ${empleado.nombre}`);
    console.log(`Sueldo mensual: ${empleado.sueldoMensual}€`);
    console.log(`Sueldo anual: ${empleado.calcularSueldoAnual()}€`);
});
