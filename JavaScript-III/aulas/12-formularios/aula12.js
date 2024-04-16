const form = document.getElementById('orderForm')

form.addEventListener('submit', function (ev){
ev.preventDefault() //previne o metodo padrão do evento 

    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const obs = document.querySelector('textarea[name="observations"]').value

    let salad = ""
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
        salad += ' - ' + item.value + '\n'
    })
    
    console.log({
        name,
        address,
        breadType,
        main,
        salad,
        obs
    })

    alert(
        'Pedido Realizado!' +
        '\nNome do Cliente: ' + name +
        '\nTipo de pão: ' + breadType +
        '\nRecheio: ' + main +
        '\nObservações: ' + obs
    )

})