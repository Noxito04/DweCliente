const nombreC = 'username';
function establecerCookie(nombre, valor, dias) {
    const maxEdad = dias * 24 * 60 * 60;
    document.cookie = `${nombre}=${valor}; Max-Age=${maxEdad}; path=/`;
}

function obtenerCookie(nombre) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [nombreCookie, valorCookie] = cookie.trim().split('=');
        if (nombreCookie === nombre) {
            return valorCookie;
        }
    }
    return null;
}

function borrarCookie(nombre) {
    document.cookie = `${nombre}=; Max-Age=-1; path=/`;
}

const regex = {
    usuario: /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/,
    correo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    contraseña: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
    edad: /^\d+$/
};

function validarCampo(entrada, patron) {
    const valor = entrada.value.trim();
    if (valor === "") return false;
    return patron.test(valor);
}

function mostrarEstado(entrada, esValido, spanEstado) {
    spanEstado.classList.remove('d-none');
    if (esValido) {
        entrada.classList.add("is-valid");
        entrada.classList.remove("is-invalid");
        spanEstado.textContent = "Correcto";
        spanEstado.className = "form-text text-success";
    } else {
        entrada.classList.add("is-invalid");
        entrada.classList.remove("is-valid");
        spanEstado.textContent = "Formato incorrecto";
        spanEstado.className = "form-text text-danger";
    }
}

const mensajesAyuda = {
    usuario: "Introduce solo letras y espacios.",
    correo: "Debe ser un correo electrónico válido.",
    contraseña: "Mín. 8 caracteres, 1 mayúscula, 1 número y 1 símbolo.",
    edad: "Introduce solo números."
};


window.onload = function () {

    const mensajeEstado = document.getElementById('mensaje-estado');

    const inputU = document.getElementById('usuario');
    const ayudaU = document.getElementById('textU');
    const estadoU = document.getElementById('estadoU');

    const inputC = document.getElementById('correo');
    const ayudaC = document.getElementById('textC');
    const estadoC = document.getElementById('estadoC');

    const inputE = document.getElementById('contrasena');
    const ayudaE = document.getElementById('textE');
    const estadoE = document.getElementById('estadoE');

    const inputEd = document.getElementById('edad');
    const ayudaEd = document.getElementById('textEd');
    const estadoEd = document.getElementById('estadoEd');

    const nombreUsuarioGuardado = obtenerCookie(nombreC);
    if (nombreUsuarioGuardado) {
        mensajeEstado.classList.remove('d-none');
        mensajeEstado.classList.add('alert-success');
        mensajeEstado.textContent = `Bienvenido de nuevo, ${nombreUsuarioGuardado}.`;
        inputU.value = nombreUsuarioGuardado;
    }

    inputU.addEventListener('focus', () => {
        ayudaU.textContent = mensajesAyuda.usuario;
        ayudaU.classList.remove('d-none');
        estadoU.classList.add('d-none');
    });
    inputU.addEventListener('blur', () => {
        ayudaU.classList.add('d-none');
        mostrarEstado(inputU, validarCampo(inputU, regex.usuario), estadoU);
    });
    inputU.addEventListener('input', () => {
        mostrarEstado(inputU, validarCampo(inputU, regex.usuario), estadoU);
    });

    inputC.addEventListener('focus', () => {
        ayudaC.textContent = mensajesAyuda.correo;
        ayudaC.classList.remove('d-none');
        estadoC.classList.add('d-none');
    });
    inputC.addEventListener('blur', () => {
        ayudaC.classList.add('d-none');
        mostrarEstado(inputC, validarCampo(inputC, regex.correo), estadoC);
    });
    inputC.addEventListener('input', () => {
        mostrarEstado(inputC, validarCampo(inputC, regex.correo), estadoC);
    });

    inputE.addEventListener('focus', () => {
        ayudaE.textContent = mensajesAyuda.contraseña;
        ayudaE.classList.remove('d-none');
        estadoE.classList.add('d-none');
    });
    inputE.addEventListener('blur', () => {
        ayudaE.classList.add('d-none');
        mostrarEstado(inputE, validarCampo(inputE, regex.contraseña), estadoE);
    });
    inputE.addEventListener('input', () => {
        mostrarEstado(inputE, validarCampo(inputE, regex.contraseña), estadoE);
    });

    inputEd.addEventListener('focus', () => {
        ayudaEd.textContent = mensajesAyuda.edad;
        ayudaEd.classList.remove('d-none');
        estadoEd.classList.add('d-none');
    });
    inputEd.addEventListener('blur', () => {
        ayudaEd.classList.add('d-none');
        mostrarEstado(inputEd, validarCampo(inputEd, regex.edad), estadoEd);
    });
    inputEd.addEventListener('input', () => {
        mostrarEstado(inputEd, validarCampo(inputEd, regex.edad), estadoEd);
    });

    document.getElementById('formulario').addEventListener('submit', (e) => {
        e.preventDefault();
        let todoValido = true;
        if (!validarCampo(inputU, regex.usuario)) {
            mostrarEstado(inputU, false, estadoU);
            todoValido = false;
        } else {
            mostrarEstado(inputU, true, estadoU);
        }
        if (!validarCampo(inputC, regex.correo)) {
            mostrarEstado(inputC, false, estadoC);
            todoValido = false;
        } else {
            mostrarEstado(inputC, true, estadoC);
        }
        if (!validarCampo(inputE, regex.contraseña)) {
            mostrarEstado(inputE, false, estadoE);
            todoValido = false;
        } else {
            mostrarEstado(inputE, true, estadoE);
        }
        if (!validarCampo(inputEd, regex.edad)) {
            mostrarEstado(inputEd, false, estadoEd);
            todoValido = false;
        } else {
            mostrarEstado(inputEd, true, estadoEd);
        }

        if (!todoValido) {
            alert("Debe corregir los errores en el formulario antes de enviar.");
            mensajeEstado.classList.remove('alert-success');
            mensajeEstado.classList.add('alert-danger');
            mensajeEstado.textContent = "¡Error! Corrija los campos en rojo.";
        } else {
            const recordarCheckbox = document.getElementById('recordar');
            if (recordarCheckbox.checked) {
                establecerCookie(nombreC, inputU.value.trim(), 7);
            }

            mensajeEstado.classList.remove('d-none', 'alert-danger', 'alert-info');
            mensajeEstado.classList.add('alert-success');
            mensajeEstado.textContent = "Formulario enviado correctamente.";
        }
    });

    document.getElementById('btn-eliminar-cookie').addEventListener('click', () => {
        borrarCookie(nombreC);
        inputU.value = '';
        inputU.classList.remove('is-valid', 'is-invalid');

        mensajeEstado.classList.remove('d-none', 'alert-success', 'alert-danger');
        mensajeEstado.classList.add('alert-info');
        mensajeEstado.textContent = `La cookie '${nombreC}' ha sido eliminada correctamente.`;

    });
};