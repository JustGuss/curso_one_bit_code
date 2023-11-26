// área do triângulo: base * altura / 2
// área do retângulo: base * altura
// área do quadrado: lado²
// área do trapézio: (base maior + base menor) * altura / 2
// área do círculo: pi * raio² (considere pi = 3.14) 

let opcao = 0
let baseTri = 0
let alturaTri = 0
let baseRet = 0
let alturaRet = 0
let ladoQuad = 0
let baseMaiorTrap = 0
let baseMenorTrap = 0
let alturaTrap = 0
let raioCirc



do {
    opcao = Number(prompt('Cálculo de formas geométricas\n\n1. Calcular área do triângulo\n2. Calcular área do retângulo\n3. Calcular área do quadrado\n4. Calcular área do trapézio\n5. Calcular área do círculo\n6. Sair'))

    switch (opcao) {
        case 1:
            baseTri = Number(prompt('Qual é a medida da base do triângulo?'))
            alturaTri = Number(prompt('Qual é a medida da altura do triângulo?'))
            alert(`Área do triângulo: ${baseTri * alturaTri / 2}`)
            break
        case 2:
            baseRet = Number(prompt('Qual a medida da base do retângulo?'))
            alturaRet = Number(prompt('Qual é a medida da altura do retângulo?'))
            alert(`Área do retângulo: ${baseRet * alturaRet}`)
            break
        case 3:
            ladoQuad = Number(prompt('Qual a medida dos lados do quadrado?'))
            alert(`Área do quadrado ${ladoQuad ** 2}`)
        case 4:
            baseMaiorTrap = Number(prompt('Qual a medida da base maior do trézio?'))
            baseMenorTrap = Number(prompt('Qual a medida da base menor do trézio?'))
            alturaTrap = Number(prompt('Qual a medida da altura do trézio?'))
            alert(`Área do trpézio: ${(baseMaiorTrap + baseMenorTrap) * alturaTrap / 2}`)
            break
        case 5:
            raioCirc = Number(prompt('Qual o raio do circulo?'))
            alert(`Área do circulo: ${3.14 * raioCirc ** 2}`)

    }

} while (opcao != 6)