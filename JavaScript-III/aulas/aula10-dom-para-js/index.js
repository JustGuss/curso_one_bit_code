function register(element) {
    const userName = element.children.userName.value
    const password = element.children.password.value
    const passwordconfirmation = element.children.passwordconfirmation.value

    if (password === passwordconfirmation) {
        alert('Usuário registrado!')
    } else {
        alert('As senhas não conferem.')
        
    }
}