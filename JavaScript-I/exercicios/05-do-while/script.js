//ao usar DOWHILE, a estrutura executa o bloco, e só depois testa 
let saldo = Number(prompt('Adicionar saldo inicial:'))
let opcao = ''
let add = 0
let remover = 0

do {

    opcao = prompt(`seu saldo atual é de: ${saldo}\n1.adicionar\n2.remover\n3.sair`)

    switch (opcao) {
        case '1':
            add = Number(prompt('quanto deseja adicionar ao seu saldo?'))
            saldo += add
            alert(`Você adicionou ${add} ao seu saldo e agora possui ${saldo}`)
            break
        case '2':
            remover = Number(prompt('Quanto deseja remover?'))
            saldo -= remover
            alert(`Você removeu ${remover} de seu saldo e agora possui ${saldo}`)
    }

} while (opcao !== '3')