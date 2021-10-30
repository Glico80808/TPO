const name = document.getElementById('name')
const name = document.getElementById('password')
const name = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e)=> {
    let messages = []
    if (name.value ==='' || name.value == null){
        messages.push('Name is required')
    }

    if(password.value.length <= 6){
        messages.push('La contraseña debe contener al menos un signo y/o caractér numérico ')
    }

    if(password.value.length === 'contraseña'){
        messages.push('La contraseña no puede ser "contraseña"')
    }

    if (messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join( ',')
    }
})