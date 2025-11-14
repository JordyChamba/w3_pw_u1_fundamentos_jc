let operacion = "";
let resultadoMostrado = false;

window.mostrarDisplay = function(valor) {
    const display = document.getElementById("id_display");
    if (!display) return;
    if (valor === "=") {
        calcular();
        return;
    }
    if (resultadoMostrado && /[0-9.]/.test(valor)) {
        operacion = "";
        resultadoMostrado = false;
    }
    operacion += String(valor);
    display.innerText = operacion;
};

function calcular() {
    const display = document.getElementById("id_display");
    if (!display) return;
    try {
        let expresion = operacion.replace(/%/g, "/100");
        const resultado = Function(`"use strict"; return (${expresion})`)();
        display.innerText = resultado;
        operacion = String(resultado);
        resultadoMostrado = true;
    } catch {
        display.innerText = "ERROR";
        operacion = "";
        resultadoMostrado = false;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const btnC = document.getElementById("id_C");
    const btnLarr = document.getElementById("id_larr");
    const display = document.getElementById("id_display");

    if (btnC) {
        btnC.onclick = () => {
            operacion = "";
            resultadoMostrado = false;
            if (display) display.innerText = "";
        };
    }

    if (btnLarr) {
        btnLarr.onclick = () => {
            if (!operacion) return;
            operacion = operacion.slice(0, -1);
            if (display) display.innerText = operacion;
        };
    }
});