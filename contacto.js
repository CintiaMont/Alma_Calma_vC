function esValidoNombre(nombre) {
    return /^[a-zA-Z_ ]+$/.test(nombre);
}

function validarEmail(email) {
    let regexEmail= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!regexEmail.test(email)){
     alert("Introduzca una dirección de mail valida.");
    }
  }


document.getElementById('email').addEventListener('focusout', function (e) {
    let inputEmail = document.getElementById('email');
    validarEmail(inputEmail.value)
})

document.getElementById('name').addEventListener('focusout', function () {
    let inputNombre = document.getElementById('name');
    if (!esValidoNombre(inputNombre.value)) {
        alert('El nombre debe contener solo letras');
    }
})


let form = document.getElementById('contact');

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault()
    const formulario = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: formulario,
        headers: {
            'Accept': 'aplication/json'
        }
    })
    if (response.ok) {
        this.reset()
        alert('Gracias por completar el formulario')
    }
}