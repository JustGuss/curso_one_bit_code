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

let opcao = ''
const vagas = [];
let newArray

function listarVagas(){
    
}

function novaVaga(){
    newArray = {
        nome: prompt('Digite um nome para a vaga:'),
        descrição: prompt('Digite uma descrição para a vaga:'),
        dataLimite: prompt('Digite uma data limite para esta vaga:')
    }
    vagas.push(newArray)
}

function excluirVaga(){

}

function visualizarVaga(){
    
}

function exibirMenu(){
   opcao = prompt(
    '1. Listar vagas'+
    '\n2. Adicionar uma nova vaga'+
    '\n3. Excluir uma das vagas existentes'+
    '\n4. Visualizar uma vaga'+
    '\n5. Inscrever um candidato a uma vaga'
    
   )
}

function executar(){
     do{
        switch(opcao){
            case '1':
                exibirMenu()
        }
    } while(opcao !='sair')
}