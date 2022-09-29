
function esValidoNombre(nombre) {
    return /^[a-zA-Z_ ]+$/.test(nombre);
}

function esValidoEmail(email) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
}

/*document.getElementById('email').addEventListener('input', function () {
    let inputEmail = document.getElementById('email');

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!esValidoEmail(inputEmail.value)) {
        alert('Ingrese un mail valido');
        inputEmail.value = '';
    }
});*/


document.getElementById('name').addEventListener('input', function () {
    let inputNombre = document.getElementById('name');
    if (!esValidoNombre(inputNombre.value)) {
        alert('El nombre debe contener solo letras');
        inputNombre.value = '';
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
        headers:{
            'Accept': 'aplication/json'
        }
    })
    if(response.ok){
        this.reset()
        alert('Gracias por completar el formulario')
    }
}