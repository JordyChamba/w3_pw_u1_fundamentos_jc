function guardar() {
  validarCampos();
}
function validarCampos() {

  let nombre = document.getElementById("id_nombre").value;
  let apellido = document.getElementById("id_apellido").value;
  let fecha = document.getElementById("id_fecha").value;
  let email = document.getElementById("id_email").value;
  let password = document.getElementById("id_password").value;
  
  if (nombre === "") {
    mostrarMensaje('Campo Nombre Incompleto!');
    mostrarAterisco('id_error_nombre');
    return;
  }

  if (apellido === "") {
    mostrarMensaje('Campo Apellido Incompleto!');
    mostrarAterisco('id_error_apellido');
    return;
  }

  if (email === "") {
    mostrarMensaje('Campo Email Incompleto!');
    mostrarAterisco('id_error_email');
    return;
  }

}
function mostrarMensaje(msg) {
  let mensaje = document.getElementById("id_msg_error");
  mensaje.innerText = msg;
  mensaje.style.display = "block";
}
function mostrarAterisco(idElemento) {
  document.getElementById(idElemento).innerText = "*";
  document.getElementById(idElemento).style.display = "inline";
}

function limpiarMensaje() {
  let mensaje = document.getElementById("id_msg_error");
  mensaje.innerText = "";
  mensaje.style.display = "none";

  const errorAsterisco = document.querySelectorAll('.error_asterisco');
  errorAsterisco.forEach(e => e.innerText = '');  
}

function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}