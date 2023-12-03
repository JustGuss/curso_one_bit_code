let resposta = Number(prompt('Digite um numero de 1 á 20:'))
let resultado = ''

for (let contagem=0; contagem <= 20; contagem++) {
    resultado += `${resposta} X ${contagem} = ${resposta * contagem}\n`
    
}
alert(resultado)