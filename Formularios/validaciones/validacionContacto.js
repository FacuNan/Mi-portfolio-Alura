
export function valida(input) {
    const tipoInput = input.dataset.tipo;

    if (validadores[tipoInput]) {
        validadores[tipoInput](input);
    }

    if (input.validity.valid) {

        input.parentElement.classList.remove("input-container--invalid")
        input.parentElement.querySelector('.input-message-error').innerHtml = ''
       

    } else {
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerText = mostrarMensajeDeError(tipoInput, input);
        
    }


}

const tipoErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
]

const mensajeError = {
    nombre: {
        valueMissing: 'Este nombre no puede estar vacio',
        patternMismatch: 'El campo nombre debe contener un minimo de 4 caracteres y maximo de 50 caracteres'
    },
    email: {
        valueMissing: 'El email no puede estar vacio',
        typeMismatch: 'El correo no es valido, debe estar en formato Email'
    },

    asunto: {
        valueMissing: 'Este asunto  no puede estar vacio',
        patternMismatch: 'El campo  asunto debe contener un minimo de 4 caracteres y maximo de 50 caracteres'
    },
    texto: {
        valueMissing: 'Este mensaje  no puede estar vacio',
        patternMismatch: 'El campo  mensaje debe contener un minimo de 4 caracteres y maximo de 50 caracteres'
    }
}

function mostrarMensajeDeError(tipoInput, input) {
    let mensaje = ''
    tipoErrores.forEach((error) => {
        if (input.validity[error]) {
            mensaje = mensajeError[tipoInput][error]
            console.log(tipoInput)

        }
    });
    return mensaje
}
const validadores = {
    nombre: (input) => mensajes(input),
    texto: (input) => mensajes(input)
}


function mensajes(input) {
    let mensaje = ''
    if (input.value == 0) {
        mensaje = 'Ingrese al menos 4 digitos'
    }

    input.setCustomValidity(mensaje)

}


