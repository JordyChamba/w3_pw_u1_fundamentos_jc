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

function fundamentosJS() {
    /*Tipos de variables*/
    var nombre = "Sikario"; // antigua, ya es considerada obsoleta
    let apellido = "Junior";  // variables cambiantes
    let apellido2 = 30;          // aplica tipado dinamico, no se necesita declarar el tipo de dato
    apellido2 = "Perez";    // reasignacion de variable    
    let arreglo = [1, 2, 3, 4, 5, 6]; // arreglo o array
    let diaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]; // arreglo o array
    const IVA = 12.8; // constante, no se puede reasignar
    console.log('Fundamentos JS');
    console.log(nombre);
    console.log(IVA);
    console.log(arreglo);

    /*Arreglos*/
    const arregloDiasSemana = ["Lunes", "Martes", "Miercoles"];
    arregloDiasSemana.push("Jueves");
    console.log(arregloDiasSemana);
    arregloDiasSemana.unshift("Dias");
    console.log(arregloDiasSemana);
    console.log(arregloDiasSemana[0]);
    console.log("Manejo de nulos, undefined y vacio");
    arregloDiasSemana.push(null);
    arregloDiasSemana.push('');
    console.log(arregloDiasSemana[5]);
    console.log(arregloDiasSemana[6]);
    console.log(arregloDiasSemana[7]);

    const numerosPares = [2, 4, 6, 8, 10];
    const numerosImpares = [1, 3, 5, 7, 9];
    const numerosTotales = numerosImpares.concat(numerosPares);
    console.log(numerosTotales);

    /*Sentencias de control*/
    let edad = 19;
    if (edad >= 18) {
        console.log("Es mayor de edad");
    } else {
        console.log("Es menor de edad");
    }

    /*<-- -- Sentencia switch -- -->*/
    let dia = 'Lunes';
    switch (dia) {
        case 'Lunes':
            console.log("Es lunes");
            break;
        case 'Martes':
            console.log("Es martes");
            break;
        default:
            console.log("No es ninguno de esos dias");
            break;
    }

    /*<-- -- Bucles -- -->*/
    for(let i =0; i <= 5; i++) {
        console.log(i);
    }

    const frutas = ['Manzana', 'Sandia', 'Papaya', 'Naranja'];
    for(let fruta of frutas) { // of para arreglos
        console.log(fruta);
    }

    /*<-- -- Manejo de objetos -- -->*/
    const profesor = {
         nombre: 'Bryan',
         apellido: 'Loya',
         edad: 26,
         ecuatoriano: true,
         genero: 'M',
         ciudad: 'Quito'
    }

    console.log(profesor);
    console.log(profesor.nombre);
    profesor.apellido = 'Gonzalez';
    console.log(profesor);

    /*Comparadores*/
    if(profesor.ciudad === 'Quito') {
        console.log('Es quiteño');
    }

    if(profesor.edad !== 26) {
        console.log('Es diferente de 26');
    }else {
        console.log('Es igual a 26');
    }

    for(let clave in profesor) {
        console.log(clave);
        console.log(profesor[clave]);
    }
}