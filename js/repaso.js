document.addEventListener('DOMContentLoaded', () => {
    
    const nameInput = document.getElementById('id_name');
    const numberInput = document.getElementById('id_number');
    const expInput = document.getElementById('exp-date');
    const cvvInput = document.getElementById('cvv');

    nameInput.addEventListener('input', () => {

    });

    numberInput.addEventListener('input', () => {
        numberInput.value = numberInput.value.replace(/[e\+\-\.]/gi, '');
        
        if (numberInput.value.length > 16) {
            numberInput.value = numberInput.value.slice(0, 16);
        }
    });

    expInput.addEventListener('input', () => {
        let value = expInput.value.replace(/\D/g, '');
        
        if (value.length > 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        
        expInput.value = value;
    });

    cvvInput.addEventListener('input', () => {
        cvvInput.value = cvvInput.value.replace(/\D/g, '').slice(0, 4);
    });

});

function guardar() {
    
    const nameInput = document.getElementById('id_name');
    const numberInput = document.getElementById('id_number');
    const expInput = document.getElementById('exp-date');
    const cvvInput = document.getElementById('cvv');
    

    let isFormValid = true;


    const setError = (element) => {
        element.classList.add('input-error');
    };

    const clearError = (element) => {
        element.classList.remove('input-error');
    };

    clearError(nameInput);
    clearError(numberInput);
    clearError(expInput);
    clearError(cvvInput);

    if (!nameRegex.test(nameInput.value.trim())) {
        setError(nameInput);
        isFormValid = false;
        console.log("Error: El nombre parece incompleto.");
    }

    const numberRegex = /^\d{16}$/;
    if (!numberRegex.test(numberInput.value)) {
        setError(numberInput);
        isFormValid = false;
        console.log("Error: El número de tarjeta debe tener 16 dígitos.");
    }

    const dateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!dateRegex.test(expInput.value)) {
        setError(expInput);
        isFormValid = false;
        console.log("Error: Formato de fecha debe ser MM/YY.");
    } else {

        const [month, year] = expInput.value.split('/');

        const expDate = new Date(`20${year}`, month - 1); 

        const lastDayOfMonth = new Date(expDate.getFullYear(), expDate.getMonth() + 1, 0);
        const today = new Date();

        if (lastDayOfMonth < today) {
            setError(expInput);
            isFormValid = false;
            console.log("Error: La tarjeta está expirada.");
        }
    }

    const cvvRegex = /^\d{3,4}$/;
    if (!cvvRegex.test(cvvInput.value)) {
        setError(cvvInput);
        isFormValid = false;
        console.log("Error: El CVV debe tener 3 o 4 dígitos.");
    }

    if (isFormValid) {
        console.log('¡Formulario VÁLIDO! Enviando datos...');

        console.log({
            nombre: nameInput.value.trim(),
            numero: numberInput.value,
            fecha: expInput.value,
            cvv: cvvInput.value
        });
    } else {
        console.log('Formulario INVÁLIDO. Por favor, corrige los campos marcados.');
    }
}