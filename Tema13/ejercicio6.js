"use strict";
// Ejercicio 6 - Clases y encapsulación
var _a;
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
    }
}
(_a = document.getElementById('btnEjercicio6')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    console.log('=== EJERCICIO 6 - CLASES Y ENCAPSULACIÓN ===');
    const persona = new Persona('Jordi', 21);
    // Llamar al método
    persona.presentarse();
    // Acceder a propiedad pública
    console.log('Nombre (público):', persona.nombre);
    // Intentar acceder a propiedad privada (comentado)
    // console.log(persona.edad);
    // TypeScript detectará el error: La propiedad 'edad' es privada y solo se puede acceder desde la clase 'Persona'
});
