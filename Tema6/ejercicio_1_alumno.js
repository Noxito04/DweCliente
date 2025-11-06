/* ===================================
   TEMA 6 - OBJETOS Y ARRAYS
   EJERCICIOS PARA ESTUDIANTES
   ===================================

   INSTRUCCIONES:
   1. Completa cada función siguiendo los comentarios TODO
   2. No modifiques los nombres de las funciones ni variables principales
   3. Usa solo JavaScript vanilla (sin librerías)
   4. Todas las salidas deben mostrarse en el DOM usando innerHTML
   5. Testea cada ejercicio antes de continuar

   RECORDATORIO DE SINTAXIS:
   - Usar function nombreFuncion() {} (NO arrow functions)
   - Usar var para declarar variables
   - Usar document.getElementById() para seleccionar elementos
   - Usar innerHTML para mostrar resultados en el DOM
*/

// ===================================
// EJERCICIO 1: CREAR OBJETO ESTUDIANTE
// ===================================

function ejercicio1() {

    // TODO: Crear un objeto estudiante con las siguientes propiedades:
    // - nombre: "María"
    // - apellidos: "García López"
    // - edad: 20
    // - curso: "2º DAW"
    // - mostrarInfo: function() que retorne HTML con toda la información


    let estudiante = {
        nombre: "María",
        apellidos: "García López",
        edad: 20,
        curso: "2º DAW",
        // TODO: Completar las propiedades del objeto
        mostrarInfo: function () {
            // TODO: Retornar HTML con la información del estudiante
            // Sugerencia: usar template strings o concatenación  

            return `<div class="card bg-info"><div class="card-body">
             Nombre: ${this.nombre} ${this.apellidos}, Años: ${this.edad} curso: ${this.curso}</div> </div>`; // Cambiar esta línea
        }
    };
    // TODO: Mostrar el resultado en el DOM
    // Pista: usar document.getElementById("resultado-ej1").innerHTML = estudiante.mostrarInfo()
    const resultado = document.getElementById("resultado-ej1");
    resultado.innerHTML = estudiante.mostrarInfo();
}

// ===================================
// EJERCICIO 2: ARRAY DE COLORES
// ===================================

// Variable global para el array de colores
var colores = ["rojo", "azul", "verde"];

function agregarColor() {
    // TODO: Obtener el valor del input con id "color-input"
    var colorInput = document.getElementById("color-input");
    // TODO: Agregar el color al array usando push()
    var nuevoColor = colorInput.value;
    if (nuevoColor.trim() === "") {
        document.getElementById("resultado-ej2").innerHTML =
            "<div class='alert alert-danger'>El campo de color no puede estar vacío</div>";
        return;
    }
    colores.push(nuevoColor);
    // TODO: Limpiar el input
    colorInput.value = "";
    // TODO: Mostrar mensaje de confirmación
    document.getElementById("resultado-ej2").innerHTML =
        "<div class='alert alert-success'>Color " + nuevoColor + " añadido correctamente</div>";
}

function eliminarUltimoColor() {
    // TODO: Eliminar el último elemento del array usando pop()
    var eliminado = colores.pop();
    // TODO: Mostrar mensaje indicando qué color se eliminó
    document.getElementById("resultado-ej2").innerHTML =
        "<div class='alert alert-warning'>Color " + eliminado + " eliminado correctamente</div>";
    // TODO: Si el array está vacío, mostrar mensaje apropiado
    if (colores.length === 0) {
        document.getElementById("resultado-ej2").innerHTML =
            "<div class='alert alert-danger'>No se puede eliminar y que no hay colores</div>";
    }
}

function mostrarColores() {
    // TODO: Mostrar todos los colores del array

    // TODO: Crear HTML con la lista de colores

    // Sugerencia: usar un bucle for para crear la lista

    var html = "<h5>Lista de Colores:</h5><ul>";
    // TODO: Completar el bucle para mostrar los colores
    for (var i = 0; i < colores.length; i++) {
        html += "<li>" + colores[i] + "</li>";
    }
    html += "</ul>";

    document.getElementById("resultado-ej2").innerHTML = html;
}

// ===================================
// EJERCICIO 3: CATÁLOGO DE PRODUCTOS
// ===================================

var productos = []; // Array que contendrá los objetos producto

function cargarProductos() {
    // TODO: Crear array con al menos 5 objetos producto

    // Cada producto debe tener: nombre, precio, categoria

    productos = [
        // TODO: Completar con objetos producto
        // Ejemplo: { nombre: "Laptop", precio: 899, categoria: "Electrónicos" }
        { nombre: "Ordenador", precio: 899, categoria: "Electrónicos" },
        { nombre: "Teclado RAZER", precio: 50, categoria: "Electrónicos" },
        { nombre: "Fairy", precio: 10, categoria: "Limpieza" },
        { nombre: "Zapatos", precio: 80, categoria: "Calzado" },
        { nombre: "Libro", precio: 15, categoria: "Literatura" }
    ];

    mostrarProductos(productos);
}

function ordenarPorPrecio() {
    // TODO: Ordenar el array productos por precio de menor a mayor
    // Pista: usar el método sort() con función comparadora
    productos.sort(function (a, b) {
        return a.precio - b.precio;
    });
    mostrarProductos(productos);
}

function filtrarProductosCaros() {
    // TODO: Filtrar productos con precio mayor a 50€
    // Pista: usar el método filter()
    var productosCaros = []; // TODO: Implementar el filtro
    productosCaros = productos.filter(function (producto) {
        return producto.precio > 50;
    });
    mostrarProductos(productosCaros);

}

function mostrarProductos(arrayProductos) {
    // TODO: Mostrar los productos en formato HTML
    // Crear tarjetas o lista con nombre, precio y categoría
    var html = "";
    if (arrayProductos.length === 0) {
        html = "<div class='alert alert-warning'>No hay productos para mostrar</div>";
    } else {
        html = "<h5>Catálogo de Productos:</h5>";
    }
    // TODO: Recorrer el array y crear HTML para cada producto
    for (var i = 0; i < arrayProductos.length; i++) {
        html += "<div class='card bg-light mb-2'><div class='card-body'>";
        html += "<h5 class='card-title'>" + arrayProductos[i].nombre + "</h5>";
        html += "<p class='card-text'>Precio: " + arrayProductos[i].precio + "€</p>";
        html += "<p class='card-text'>Categoría: " + arrayProductos[i].categoria + "</p>";
        html += "</div></div>";
    }
    document.getElementById("resultado-ej3").innerHTML = html;
}
// ===================================
// EJERCICIO 4: ESTUDIANTE CON NOTAS
// ===================================

var estudianteNotas = {
    nombre: "Carlos Ruiz",
    notas: [],

    agregarNota: function (nota) {
        // TODO: Validar que la nota esté entre 0 y 10
        // TODO: Agregar la nota al array de notas
        // TODO: Mostrar mensaje de confirmación
        if (nota >= 0 && nota <= 10) {
            this.notas.push(nota);
            document.getElementById("resultado-ej4").innerHTML =
                "<div class='alert alert-success'>Nota " + nota + " añadida correctamente</div>";
        } else {
            document.getElementById("resultado-ej4").innerHTML =
                "<div class='alert alert-danger'>La nota debe estar entre 0 y 10</div>";
        }
    },

    calcularPromedio: function () {
        // TODO: Calcular el promedio de todas las notas
        if (this.notas.length === 0) {
            return 0;
        }
        // TODO: Retornar el promedio redondeado a 2 decimales
        // Pista: usar reduce() o un bucle for
        var suma = 0;
        for (var i = 0; i < this.notas.length; i++) {
            suma += this.notas[i];
        }
        var promedio = suma / this.notas.length;
        return promedio.toFixed(2);
    },

    mostrarNotas: function () {
        // TODO: Retornar HTML con todas las notas
        if (this.notas.length === 0) {
            return "<div class='alert alert-warning'>No hay notas para mostrar</div>";
        }
        var html = "<h5>Notas de " + this.nombre + ":</h5><ul>";
        for (var i = 0; i < this.notas.length; i++) {
            html += "<li>" + this.notas[i] + "</li>";
        }
        // TODO: Incluir el promedio si hay notas
        html += "</ul>";
        html += "<p><strong>Promedio:</strong> " + this.calcularPromedio() + "</p>";
        return html;
    }
};

function agregarNota() {
    // TODO: Obtener el valor del input de nota
    var notaInput = document.getElementById("nota-input");
    var nota = parseFloat(notaInput.value);
    estudianteNotas.agregarNota(nota);
    // TODO: Convertir a número
    // TODO: Llamar al método agregarNota del objeto
    // TODO: Limpiar el input
    notaInput.value = "";

    // TODO: Actualizar la visualización
}

function calcularPromedio() {
    // TODO: Llamar al método calcularPromedio
    var promedio = estudianteNotas.calcularPromedio();
    // TODO: Mostrar el resultado en el DOM
    document.getElementById("resultado-ej4").innerHTML =
        "<div class='alert alert-info'>El promedio de las notas es: " + promedio + "</div>";
}

function mostrarNotasEstudiante() {
    // TODO: Llamar al método mostrarNotas
    var html = estudianteNotas.mostrarNotas();
    // TODO: Mostrar el resultado en el DOM
    document.getElementById("resultado-ej4").innerHTML = html;
}

// ===================================
// EJERCICIO 5: GESTIÓN DE EMPLEADOS
// ===================================

var empleados = [];

function cargarEmpleados() {
    // TODO: Crear array con al menos 6 objetos empleado
    // Cada empleado: nombre, departamentos, salario, antiguedad
    empleados = [

        // TODO: Completar con datos de empleados
        { nombre: "Ana Pérez", departamento: "frontend", salario: 3200, antiguedad: 3 },
        { nombre: "Luis Gómez", departamento: "backend", salario: 2800, antiguedad: 2 },
        { nombre: "Marta Sánchez", departamento: "fullstack", salario: 4000, antiguedad: 5 },
        { nombre: "Javier Torres", departamento: "base de datos", salario: 3500, antiguedad: 4 },
        { nombre: "Sofía Ramírez", departamento: "frontend", salario: 2900, antiguedad: 1 },
        { nombre: "Carlos Fernández", departamento: "backend", salario: 3100, antiguedad: 3 },
        { nombre: "Pedro Martinez", departamento: "ciberseguridad", salario: 3300, antiguedad: 2 },
        { nombre: "Laura Díaz", departamento: "recursos humanos", salario: 3700, antiguedad: 4 },
        { nombre: "Elena Ruiz", departamento: "marketing", salario: 2600, antiguedad: 2 },
        { nombre: "Diego López", departamento: "ventas", salario: 3000, antiguedad: 8 },
        { nombre: "Isabel Gómez", departamento: "soporte técnico", salario: 1800, antiguedad: 1 },
        { nombre: "Jorge Hernández", departamento: "desarrollo móvil", salario: 3400, antiguedad: 7 },
        { nombre: "Natalia Jiménez", departamento: "diseño", salario: 3600, antiguedad: 6 },
        { nombre: "Andrés Moreno", departamento: "jefe de proyecto", salario: 4500, antiguedad: 5 },
        { nombre: "Sara Castillo", departamento: "analista de datos", salario: 3800, antiguedad: 4 },
        { nombre: "Rubén Ortega", departamento: "soporte técnico", salario: 2200, antiguedad: 3 }
    ];
    mostrarEmpleados(empleados);
}

function buscarPorDepartamento() {
    // TODO: Obtener el departamento del input
    var departamento = document.getElementById("departamento-input").value.toLowerCase().trim();
    // TODO: Filtrar empleados por departamento
    var empleadosDepto = empleados.filter(function (empleado) {
        return empleado.departamento === departamento;
    });
    // TODO: Mostrar los resultados
    mostrarEmpleados(empleadosDepto);
}

function filtrarSalarioAlto() {
    // TODO: Filtrar empleados con salario > 3000€
    var empleadosAltoSalario = empleados.filter(function (empleado) {
        return empleado.salario > 3000;
    });; // TODO: Implementar filtro

    mostrarEmpleados(empleadosAltoSalario);
}

function mostrarEmpleados(arrayEmpleados) {
    // TODO: Mostrar empleados en formato HTML
    // Incluir nombre, departamento, salario

    var html = "";
    if (arrayEmpleados.length === 0) {
        html = "<div class='alert alert-warning'>No hay empleados para mostrar</div>";
    } else {
        html = "<h5>Lista de Empleados:</h5>";
    }

    // TODO: Crear HTML para cada empleado
    for (var i = 0; i < arrayEmpleados.length; i++) {
        html += "<div class='card bg-light mb-2'><div class='card-body'>";
        html += "<h5 class='card-title'>" + arrayEmpleados[i].nombre + "</h5>";
        html += "<p class='card-text'>Departamento: " + arrayEmpleados[i].departamento + "</p>";
        html += "<p class='card-text'>Salario: " + arrayEmpleados[i].salario + "€</p>";
        html += "</div></div>";
    }

    document.getElementById("resultado-ej5").innerHTML = html;
}

// ===================================
// EJERCICIO 6: MÉTODOS AVANZADOS DE ARRAYS
// ===================================

var ciudades = [];

function crearArrayCiudades() {
    // TODO: Crear array con ciudades españolas
    ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Málaga"];

    // TODO: Mostrar el array original
    var html = "<h5>Ciudades originales:</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function eliminarDelMedio() {
    // TODO: Usar splice para eliminar elementos del medio
    var medio = Math.floor(ciudades.length / 2);
    var eliminados = ciudades.splice(medio, 1);
    // TODO: Mostrar qué elementos se eliminaron
    var html = "<h5>Elementos eliminados:</h5>" + eliminados.join(", ") + "<br>";
    // TODO: Mostrar el array resultante
    html += "<h5>Array resultante:</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function extraerConSlice() {
    // TODO: Usar slice para extraer una porción del array
    var porcion = ciudades.slice(1, 4);


    // TODO: Mostrar la porción extraída
    var html = "<h5>Porción extraída con slice:</h5>" + porcion.join(", ") + "<br>";
    // TODO: Mostrar que el array original no se modifica
    html += "<h5>Array original (sin modificar):</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function buscarMadrid() {
    // TODO: Usar find() para buscar "Madrid"
    // TODO: Usar indexOf() para encontrar su posición
    // TODO: Mostrar los resultados
    var encontrado = ciudades.find(function (ciudad) {
        return ciudad === "Madrid";
    });
    var indice = ciudades.indexOf("Madrid");

    var html = "<h5>Búsqueda de 'Madrid':</h5>";
    if (encontrado) {
        html += "<p>Ciudad encontrada: " + encontrado + "</p>";
        html += "<p>Índice en el array: " + indice + "</p>";
    } else {
        html += "<p>'Madrid' no se encontró en el array.</p>";
    }
    document.getElementById("resultado-ej6").innerHTML = html;
}

// ===================================
// EJERCICIO 7: CONSTRUCTOR DE VEHÍCULOS
// ===================================

// TODO: Crear función constructora Vehiculo
function Vehiculo(marca, modelo, año) {
    // TODO: Asignar propiedades usando this
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.velocidad = 25;
    // TODO: Crear método acelerar() que incremente la velocidad
    this.acelerar = function () {
        this.velocidad += 50;
    };
    // TODO: Crear método mostrarInfo() que retorne información
    this.mostrarInfo = function () {
        return "Marca: " + this.marca + ", Modelo: " + this.modelo + ", Año: " + this.año + ", Velocidad: " + this.velocidad + " km/h";
    };
}

var vehiculos = [];

function crearVehiculos() {
    // TODO: Crear varios objetos usando el constructor
    var vehiculo1 = new Vehiculo("Toyota", "Corolla", 2020);
    var vehiculo2 = new Vehiculo("Honda", "Civic", 2019);
    var vehiculo3 = new Vehiculo("Ford", "Focus", 2018);
    var vehiculo4 = new Vehiculo("Chevrolet", "Malibu", 2021);
    var vehiculo5 = new Vehiculo("Nissan", "Sentra", 2017);
    var vehiculo6 = new Vehiculo("Volkswagen", "Golf R", 2022);
    var vehiculo7 = new Vehiculo("BMW", "X5 M Competicion", 2023);
    var vehiculo8 = new Vehiculo("Audi", "RS3", 2016);
    var vehiculo9 = new Vehiculo("Mercedes-Benz", "C63 AMG", 2015);
    var vehiculo10 = new Vehiculo("Volkswagen", "Golf GTI", 2024);
    // TODO: Agregar al array vehiculos
    vehiculos.push(vehiculo1, vehiculo2, vehiculo3, vehiculo4, vehiculo5, vehiculo6, vehiculo7, vehiculo8, vehiculo9, vehiculo10);

    mostrarInfoVehiculos();
}

function acelerarTodos() {
    // TODO: Llamar al método acelerar() de todos los vehículos
    for (var i = 0; i < vehiculos.length; i++) {
        vehiculos[i].acelerar();
    }
    // TODO: Actualizar la visualización
    mostrarInfoVehiculos();
}

function mostrarInfoVehiculos() {
    // TODO: Mostrar información de todos los vehículos
    var html = "";
    if (vehiculos.length === 0) {
        html = "<div class='alert alert-warning'>No hay vehículos para mostrar</div>";
    } else {
        html = "<h5>Información de Vehículos:</h5>";
    }
    // TODO: Recorrer array y mostrar info de cada vehículo
    for (var i = 0; i < vehiculos.length; i++) {
        html += "<div class='card bg-light mb-2'><div class='card-body'>";
        html += "<p class='card-text'>" + vehiculos[i].mostrarInfo() + "</p>";
        html += "</div></div>";
    }

    document.getElementById("resultado-ej7").innerHTML = html;
}

// ===================================
// EJERCICIO 8: MATRIZ DE NÚMEROS
// ===================================

var matriz = [];

function crearMatriz() {
    // TODO: Crear matriz 3x3 con números aleatorios
    matriz = [];
    for (var i = 0; i < 3; i++) {
        matriz[i] = [];
        for (var j = 0; j < 3; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100); // Números aleatorios entre 0 y 99
        }
    }
    // Pista: usar bucles anidados y Math.random()
    mostrarMatriz();
}

function sumarDiagonal() {
    // TODO: Calcular la suma de la diagonal principal
    // TODO: Mostrar el resultado
    var suma = 0;
    for (var i = 0; i < 3; i++) {
        suma += matriz[i][i];
    }
    document.getElementById("resultado-ej8").innerHTML +=
        "<div class='alert alert-info'>Suma diagonal principal: " + suma + "</div>";
}

function mostrarMatriz() {
    // TODO: Mostrar la matriz en formato tabla HTML
    var html = "<h5>Matriz 3x3:</h5><table class='table table-bordered'>";
    // TODO: Crear filas y celdas de la tabla
    for (var i = 0; i < 3; i++) {
        html += "<tr>";
        for (var j = 0; j < 3; j++) {
            html += "<td>" + matriz[i][j] + "</td>";
        }
        html += "</tr>";
    }

    html += "</table>";
    document.getElementById("resultado-ej8").innerHTML = html;
}

// ===================================
// EJERCICIO 9: MÉTODOS FUNCIONALES
// ===================================

var numeros = [];

function crearArrayNumeros() {
    // Crear array con números del 1 al 10
    numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    mostrarArray("Array original", numeros);
}

function duplicarConMap() {
    // Usar map() para duplicar todos los números
    var duplicados = numeros.map(function (num) {
        return num * 2;
    });

    mostrarArray("Números duplicados", duplicados);
}

function filtrarPares() {
    // Usar filter() para obtener solo números pares
    var pares = numeros.filter(function (num) {
        return num % 2 === 0;
    });

    mostrarArray("Números pares", pares);
}

function sumarConReduce() {
    // Usar reduce() para sumar todos los números
    var suma = numeros.reduce(function (acumulador, num) {
        return acumulador + num;
    }, 0);

    document.getElementById("resultado-ej9").innerHTML +=
        "<div class='alert alert-success'>Suma total: " + suma + "</div>";
}

function mostrarArray(titulo, array) {
    var html = "<h6>" + titulo + ":</h6>" + array.join(", ") + "<br>";
    document.getElementById("resultado-ej9").innerHTML = html;
}

// ===================================
// EJERCICIO 10: BIBLIOTECA DE LIBROS
// ===================================

var biblioteca = [];

function agregarLibro() {
    // TODO: Obtener valores de los inputs
    var titulo = document.getElementById("libro-titulo").value; // TODO: Obtener del input
    var autor = document.getElementById("libro-autor").value; // TODO: Obtener del input
    var año = parseInt(document.getElementById("libro-year").value); // TODO: Obtener y convertir a número
    var genero = document.getElementById("libro-genero").value; // TODO: Obtener del select

    // TODO: Validar que todos los campos estén completos
    if (titulo.trim() === "" || autor.trim() === "" || isNaN(año) || genero.trim() === "") {
        document.getElementById("resultado-ej10").innerHTML =
            "<div class='alert alert-danger'>Por favor, completa todos los campos</div>";
        return;
    }

    // TODO: Crear objeto libro y agregarlo a la biblioteca
    var libro = {
        // TODO: Completar propiedades
        titulo: titulo,
        autor: autor,
        año: año,
        genero: genero
    };
    biblioteca.push(libro);
    // TODO: Limpiar los inputs
    document.getElementById("libro-titulo").value = "";
    document.getElementById("libro-autor").value = "";
    document.getElementById("libro-year").value = "";
    document.getElementById("libro-genero").value = "";

    // TODO: Mostrar mensaje de confirmación
    document.getElementById("resultado-ej10").innerHTML =
        "<div class='alert alert-success'>Libro '" + titulo + "' añadido correctamente</div>";
    // TODO: Actualizar visualización
}

function mostrarBiblioteca() {
    // TODO: Mostrar todos los libros de la biblioteca
    mostrarLibros(biblioteca);
}

function ordenarPorTitulo() {
    // TODO: Ordenar libros por título alfabéticamente
    var librosOrdenados = biblioteca.concat().sort(function (a, b) {
        return a.titulo.localeCompare(b.titulo);
    });
    mostrarLibros(librosOrdenados);
}

function filtrarPorGenero() {
    // TODO: Obtener género seleccionado
    var generoSeleccionado = document.getElementById("libro-genero").value;
    // TODO: Filtrar libros por género
    var librosFiltrados = biblioteca.filter(function (libro) {
        return libro.genero === generoSeleccionado;
    });

    mostrarLibros(librosFiltrados);
}

function librosRecientes() {
    // TODO: Filtrar libros publicados después del 2020
    var recientes = biblioteca.filter(function (libro) {
        return libro.año > 2020;
    });
    mostrarLibros(recientes);
}
// Función para eliminar la card
function eliminarLibro(indice) {
    biblioteca.splice(indice, 1);
    mostrarLibros(biblioteca);
}                                   

function mostrarLibros(arrayLibros) {
    // TODO: Mostrar libros en formato de tarjetas HTML
    var html = "";

    if (arrayLibros.length === 0) {
        html = "<div class='alert alert-warning'>No hay libros para mostrar</div>";
    } else {
        // TODO: Crear HTML para cada libro
        html = "<h5> Libros de la biblioteca: <h5/>"
        html += "<div class='row'>";
        for (var i = 0; i < arrayLibros.length; i++) {
            var libro = arrayLibros[i];

            html += `
            <div class='col-md-4 mb-3'>
                <div class='card'>
                    <div class='card-body'>
                        <h5 class='card-title'>${libro.titulo}</h5>
                        <p class='card-text'>
                        <strong>Autor:</strong>${libro.autor}<br>
                        <strong>Año:</strong> ${libro.año}<br>
                        <strong>Género:</strong> ${libro.genero}
                    </p>
                <button class='btn btn-danger btn-sm' onclick='eliminarLibro(${i})'>Eliminar</button>
                </div>
                </div>
                </div>

            `;
        }
        html += "</div>"
    }

    document.getElementById("resultado-ej10").innerHTML = html;
}

// ===================================
// EVENT LISTENERS - SOLO FALTAN LOS DEL EJERCICIO 10
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    // Ejercicio 1
    document.getElementById("btn-ej1").addEventListener("click", ejercicio1);

    // Ejercicio 2
    document.getElementById("btn-agregar-color").addEventListener("click", agregarColor);
    document.getElementById("btn-eliminar-ultimo").addEventListener("click", eliminarUltimoColor);
    document.getElementById("btn-mostrar-colores").addEventListener("click", mostrarColores);

    // Ejercicio 3
    document.getElementById("btn-cargar-productos").addEventListener("click", cargarProductos);
    document.getElementById("btn-ordenar-precio").addEventListener("click", ordenarPorPrecio);
    document.getElementById("btn-filtrar-caros").addEventListener("click", filtrarProductosCaros);

    // Ejercicio 4
    document.getElementById("btn-agregar-nota").addEventListener("click", agregarNota);
    document.getElementById("btn-calcular-promedio").addEventListener("click", calcularPromedio);
    document.getElementById("btn-mostrar-notas").addEventListener("click", mostrarNotasEstudiante);

    // Ejercicio 5
    document.getElementById("btn-cargar-empleados").addEventListener("click", cargarEmpleados);
    document.getElementById("btn-buscar-depto").addEventListener("click", buscarPorDepartamento);
    document.getElementById("btn-salario-alto").addEventListener("click", filtrarSalarioAlto);

    // Ejercicio 6
    document.getElementById("btn-crear-ciudades").addEventListener("click", crearArrayCiudades);
    document.getElementById("btn-eliminar-medio").addEventListener("click", eliminarDelMedio);
    document.getElementById("btn-extraer-slice").addEventListener("click", extraerConSlice);
    document.getElementById("btn-buscar-ciudad").addEventListener("click", buscarMadrid);

    // Ejercicio 7
    document.getElementById("btn-crear-vehiculos").addEventListener("click", crearVehiculos);
    document.getElementById("btn-acelerar-todos").addEventListener("click", acelerarTodos);
    document.getElementById("btn-info-vehiculos").addEventListener("click", mostrarInfoVehiculos);

    // Ejercicio 8
    document.getElementById("btn-crear-matriz").addEventListener("click", crearMatriz);
    document.getElementById("btn-sumar-diagonal").addEventListener("click", sumarDiagonal);
    document.getElementById("btn-mostrar-matriz").addEventListener("click", mostrarMatriz);

    // Ejercicio 9
    document.getElementById("btn-crear-numeros").addEventListener("click", crearArrayNumeros);
    document.getElementById("btn-duplicar-map").addEventListener("click", duplicarConMap);
    document.getElementById("btn-filtrar-pares").addEventListener("click", filtrarPares);
    document.getElementById("btn-sumar-reduce").addEventListener("click", sumarConReduce);

    // Ejercicio 10
    // TODO: Añadir event listeners para los botones del ejercicio 10
    document.getElementById("btn-agregar-libro").addEventListener("click", agregarLibro);
    document.getElementById("btn-mostrar-biblioteca").addEventListener("click", mostrarBiblioteca);
    document.getElementById("btn-ordenar-titulo").addEventListener("click", ordenarPorTitulo);
    document.getElementById("btn-filtrar-genero").addEventListener("click", filtrarPorGenero);
    document.getElementById("btn-libros-recientes").addEventListener("click", librosRecientes);

});

/* ===================================
   FIN DEL ARCHIVO
   
   RECORDATORIO FINAL:
   - Completa cada TODO siguiendo las instrucciones
   - Usa sintaxis tradicional de JavaScript (no ES6+)
   - Testea cada función antes de continuar
   - Todas las salidas deben ir al DOM, no a la consola
   - ¡Practica y diviértete programando!
   ===================================
*/