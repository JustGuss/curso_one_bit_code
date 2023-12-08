// Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:
// Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema Listar vagas disponíveis
// Criar um nova vaga
// Visualizar uma vaga
// Inscrever um candidato em uma vaga
// Excluir uma vaga
// Sair
// A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
// A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
// A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
// A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
// A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        //1. nome, (x candidatos)
        textoFinal += indice + 1 + '. '
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")
    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt("Informe um nome para a vaga:")
    const descricao = prompt('Informe uma descrição para a vaga:')
    const dataLimite = prompt('Informe uma data limite (dd/m/aaaa) para a vaga:')

    const confirmacao = confirm(
        'Deseja criar uma nova vaga com estas informações?\n' +
        'Nome: ' + nome + "\nDescrição: " + descricao + '\nData limite: ' + dataLimite
    )
    if (confirmacao) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert('Nova vaga adicionada.')
    }
}

function exibirVaga() {
    const indice = prompt('Informe o índice da vaga que deseja exibir:')
    
    if(indice >= vagas.length || indice < 0){
        alert('Não existe uma vaga com este índice')
        return 
        //Depois do return a function para de ser executada
        //Dessa forma o código fica mais simples invés de colocar o restante da function dentro de um 'else'
    }
    
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + '\n - ' + candidato
    }, "")

    alert(
        'Vaga nº ' + indice +
        '\nNome: ' + vaga.nome +
        '\nDescrição: ' + vaga.descricao +
        '\nData limite: ' + vaga.dataLimite +
        '\nQuantidade de candidatos: ' + vaga.candidatos.length +
        '\nCandidatos inscritos: ' + candidatosEmTexto
    )
}

function inscreverCandidato() {
    const candidato = prompt('Informe o nome do(a) candidato(a):')
    const indice = prompt('Informe o indice da vaga para a qual o(a) candidato(a) deseja se inscrever:')
    const vaga = vagas[indice]

    const confirmacao = confirm(
        'Deseja inscrever o candidato(a) ' + candidato + ' na vaga ' + indice + '?\n' +
        'Nome: ' + vaga.nome + '\nDescrição: ' + vaga.descricao + '\nData limite: ' + vaga.dataLimite
    )

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert('Inscrição realizada.')
    }
}

function excluirVaga() {
    const indice = prompt('Informe o indice da vaga que deseja excluir:')
    const vaga = vagas[indice]

    const confirmacao = confirm(
        'Tem certeza que deseja excluir essa vaga' + indice + '?\n' +
        'Nome: ' + vaga.nome + '\nDescrição: ' + vaga.descricao + '\nData limite: ' + vaga.dataLimite
    )
    if (confirmacao) {
        vagas.splice(indice, 1)
        alert('Vaga excluída.')
    }
}

function exibirMenu() {
    const opcao = prompt(
        'Cadastro de Vagas de Emprego\n' +
        'Escolha uma das opções:\n' +
        '1. Listar vagas disponíveis\n' +
        '2. Criar uma nova vaga\n' +
        '3. Vizualizar uma vaga\n' +
        '4. Inscrever um(a) candidato(a)\n' +
        '5. Excluir uma vaga\n' +
        '6. Sair'
    )

    return opcao
}

function executar() {
    let opcao = ''

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case '1':
                listarVagas()
                break
            case '2':
                novaVaga()
                break
            case '3':
                exibirVaga()
                break
            case '4':
                inscreverCandidato()
                break
            case '5':
                excluirVaga()
                break
            case '6':
                alert('Encerrando...')
                break
            default:
                alert('Opçao inválida.')
        }

    } while (opcao !== '6')
}

executar()