function guardar() {
  limpiarMensaje();
  validarCampos();
}

function validarCampos() {
  let nombre = document.getElementById("id_nombre").value.trim();
  let apellido = document.getElementById("id_apellido").value.trim();
  let fecha = document.getElementById("id_fecha").value;
  let email = document.getElementById("id_email").value.trim();
  let password = document.getElementById("id_password").value.trim();

  if (nombre === "") {
    mostrarMensaje("Campo Nombre Incompleto!");
    mostrarAsterisco("id_error_nombre");
    return;
  }

  if (apellido === "") {
    mostrarMensaje("Campo Apellido Incompleto!");
    mostrarAsterisco("id_error_apellido");
    return;
  }

  if (fecha === "") {
    mostrarMensaje("Campo Fecha Nacimiento Incompleto!");
    mostrarAsterisco("id_error_fecha");
    return;
  }

  if (email === "") {
    mostrarMensaje("Campo Email Incompleto!");
    mostrarAsterisco("id_error_email");
    return;
  }

  if (!validarEmail(email)) {
    mostrarMensaje("Email no válido. Ejemplo: usuario@correo.com");
    mostrarAsterisco("id_error_email");
    return;
  }

  if (password === "") {
    mostrarMensaje("Campo Password Incompleto!");
    mostrarAsterisco("id_error_password");
    return;
  }

  mostrarMensaje("Formulario completado exitosamente");
}

function validarEmail(email) {
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patron.test(email);
}

function mostrarMensaje(msg) {
  let mensaje = document.getElementById("id_msg_error");
  mensaje.innerText = msg;
  mensaje.style.display = "block";
}

function mostrarAsterisco(idElemento) {
  let elemento = document.getElementById(idElemento);
  elemento.innerText = "*";
  elemento.style.display = "inline";
}

function limpiarMensaje() {
  let mensaje = document.getElementById("id_msg_error");
  mensaje.style.display = "none";
  mensaje.innerText = "";

  const errores = document.querySelectorAll(".error_asterisco");
  errores.forEach((x) => {
    x.innerText = "";
    x.style.display = "none";
  });
}