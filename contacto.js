function esValidoNombre(nombre) {
    return /^[a-zA-Z_ ]+$/.test(nombre);
}

function validarEmail(email) {
    let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!regexEmail.test(email)) {
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
    
async function handleSubmit(event) {
  event.preventDefault();
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
        alert('Gracias por completar el formulario')
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          alert (data["errors"].map(error => error["message"]).join(", "))
        } else {
            alert('No se pudo enviar el formulario')
        }
      })
    }
  }).catch(error => {
    alert('No se pudo enviar el formulario')
});
}
form.addEventListener("submit", handleSubmit)
