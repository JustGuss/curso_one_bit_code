function register(ev){
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        alert('Usúario ' + username + ' registrado.')
    } else{
        alert('As senhas não conferem.')
    }
}

const button = document.querySelector('#registerButton')

button.addEventListener('click', register)

function removeListener(){
    button.removeEventListener('click', register)
    alert('Evento removido') 
}//remove um evento do tipo "click" que tenha a função "register"

button.addEventListener('mouseover', function (ev){
    console.log(ev.currentTarget)
})
