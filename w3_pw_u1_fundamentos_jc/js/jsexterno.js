function cambiarColor(id_elemento, color) {
    document.getElementById(id_elemento).style.color = color;
}

function agregarElemento(id_elemento_padre, html) {
    document.getElementById(id_elemento_padre).innerHTML = html;
}

function construirH1() {
    return '<h1 id="id_calculadora">CALCULADORA</h1>';
}

function eliminarElemento(id_elemento) {
    let elemento = document.getElementById(id_elemento);
    if (elemento) elemento.remove();
}

function ocultarElemento(id_elemento) {
    document.getElementById(id_elemento).style.display = 'none';
}

function mostrarElemento(id_elemento) {
    document.getElementById(id_elemento).style.display = 'inline';
}

function evaluarOperacion(operacion) {
    let num1 = parseFloat(document.getElementById('id_n1').value);
    let num2 = parseFloat(document.getElementById('id_n2').value);
    let resultado;

    // Validación de entrada
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('id_resultado').innerText = 'Por favor ingresa ambos números';
        return;
    }

    switch (operacion) {
        case 'sumar':
            resultado = sumar(num1, num2);
            break;
        case 'restar':
            resultado = restar(num1, num2);
            break;
        case 'multiplicar':
            resultado = multiplicar(num1, num2);
            break;
        case 'dividir':
            resultado = dividir(num1, num2);
            break;
        default:
            resultado = 'Operación no válida';
            break;
    }

    document.getElementById('id_resultado').innerText = `Resultado: ${resultado}`;
}

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) return 'Error: División por cero';
    return a / b;
}
