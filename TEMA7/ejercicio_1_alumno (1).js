// Plantilla para alumnos - Tema07 Ejercicio 1
// Completa las funciones marcadas con TODO y ejecuta desde el navegador.

// Ejercicio 1 - raizCuadrada (plantilla)
document.getElementById('run-e1').addEventListener('click', function () {
  const v = parseFloat(document.getElementById('a-e1').value);
  const out = document.getElementById('out-e1');
  // TODO: implementar raizCuadrada(numero) 
  function raizCuadrada(numero) {
    return Math.sqrt(numero);
  }
  const res = raizCuadrada(v);
  out.textContent = `Resultado: ${res}`;

});

// Ejercicio 2 - alerta (plantilla)
document.getElementById('run-e2').addEventListener('click', function () {
  const msg = document.getElementById('a-e2').value || 'Mensaje de ejemplo';

  function alerta(mensaje) {
    alert(mensaje);
  }
  alerta(msg);
  document.getElementById('out-e2').textContent = 'Implementa la función alerta(mensaje) para mostrar un alert en el navegador.';
});

// Ejercicio 3 - new Function (plantilla)
document.getElementById('run-e3').addEventListener('click', function () {

  // TODO: usa new Function para construir y ejecutar una función que sume a y b
  const sumar = new Function('a', 'b', 'return a + b;');
  const a = parseFloat(document.getElementById('a-e3a').value);
  const b = parseFloat(document.getElementById('a-e3b').value);
  const resultado = sumar(a, b);
  document.getElementById('out-e3').textContent = `Resultado: ${resultado}`;
});

// Ejercicio 4 - Hoisting con var (plantilla)
document.getElementById('run-e4').addEventListener('click', function () {
  // TODO: reproduce el ejemplo en el código editando esta función.
   function ejemploHoisting() {
    console.log('Valor de x antes de declararla:', x);
    var x = "Hola";
    console.log('Valor de x después de declararla:', x);
  }
  ejemploHoisting();
  document.getElementById('out-e4').textContent = 'Abre la consola.';
});

// Ejercicio 5 - IIFE (plantilla)
document.getElementById('run-e5').addEventListener('click', function () {

  // TODO: crea una IIFE que haga console.log y devuelva un valor. Luego muestra el resultado aquí.
    const resultado = (function () {
    console.log('Ejecutando IIFE...');
    return 'Hola desde una IIFE el numero es 18';
  })();
    document.getElementById('out-e5').textContent = `Resultado: ${resultado}`;
});

// Ejercicio 6 - Función anónima dividir (plantilla)
document.getElementById('run-e6').addEventListener('click', function () {

  // TODO: define y usa esa función para devolver el resultado
  const a = parseFloat(document.getElementById('a-e6a').value);
  const b = parseFloat(document.getElementById('a-e6b').value);

  const dividir = function (x, y) {
    if (y === 0) return 'No se puede dividir entre cero';
    return x / y;
  };

  const resultado = dividir(a, b);
document.getElementById('out-e6').textContent = `Resultado: ${resultado}`;
});

// Ejercicio 7 - Función flecha multiplicar (plantilla)
document.getElementById('run-e7').addEventListener('click', function () {

  // TODO: implementa una función flecha multiplicar = 
 const a = parseFloat(document.getElementById('a-e7a').value);
  const b = parseFloat(document.getElementById('a-e7b').value);

  const multiplicar = (x, y) => x * y;
  const resultado = multiplicar(a, b);
  document.getElementById('out-e7').textContent = `Resultado: ${resultado}`;
});


// Ejercicio 8 - Parámetros por defecto (plantilla)
document.getElementById('run-e8').addEventListener('click', function () {

  // TODO: implementar function saludar
  const nombre = document.getElementById('a-e8').value;
  function saludar(nombre = 'Invitado') {
    return `Hola, ${nombre}!`;
  }
document.getElementById('out-e8').textContent = `Resultado: ${saludar(nombre)}`;
});

// Ejercicio 9 - Funciones anidadas (plantilla)
document.getElementById('run-e9').addEventListener('click', function () {

  // TODO: implementar función externa e interna
function externa(a = 10) {
    function interna(b = 5) {
      return a + b;
    }
    return interna();
  }

  const resultado = externa();
  document.getElementById('out-e9').textContent = `Resultado: ${resultado}`;
});

// Ejercicio 10 - Métodos nativos (plantilla)
document.getElementById('run-e10').addEventListener('click', function () {

  // TODO: usa los métodos nativos vistos (length, toUpperCase, trim, indexOf, Math.random, Date.now)
const texto = document.getElementById('a-e10').value || '  Hola, Mundo|  ';

  const info = `
  Longitud: ${texto.length}
  Mayusculas: ${texto.toUpperCase()}
  Sin espacios: ${texto.trim()}
  Indice de Mundo: ${texto.indexOf('Mundo')}
  Aleatorio (0 al 1): ${Math.random()}
  Tiempo actual: ${Date.now()}
  `;
  document.getElementById('out-e10').textContent = `Resultado: ${info}`;
});
