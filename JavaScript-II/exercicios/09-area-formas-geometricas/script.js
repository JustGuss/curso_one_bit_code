// área do triângulo: base * altura / 2
// área do retângulo: base * altura
// área do quadrado: lado²
// área do trapézio: (base maior + base menor) * altura / 2
// área do círculo: pi * raio² (considere pi = 3.14) 

function calcularAreaTriangulo() {
    let baseTriangulo = Number(prompt('Qual a base do triângulo?'));
    let alturaTriangulo = Number(prompt('Qual a altura do triângulo?'));
    alert(`Área do triângulo: ${baseTriangulo * alturaTriangulo / 2}`)
}

function calcularAreaRetangulo() {
    let baseRetangulo = Number(prompt('Qual a base do retângulo?'));
    let alturaRetangulo = Number(prompt('Qual a base do retângulo?'));
    alert(`Área do retângulo: ${baseRetangulo * alturaRetangulo}`)
}

function calcularAreaQuadrado() {
    let ladoQuadrado = Number(prompt('Qual a medida do lado do quadrado?'));
    alert(`Área do quadrado: ${ladoQuadrado ** 2}`)
}

function calcularAreaTrapezio() {
    let baseMaiorTrapezio = Number(prompt('Qual a base maior do trapézio?'));
    let baseMenorTrapezio = Number(prompt('Qual a base menor do trapézio?'));
    let alturaTrapezio = Number(prompt('Qual a altura do trapézio?'));
    alert(`Área do Trapézio: ${(baseMaiorTrapezio + baseMenorTrapezio) * alturaTrapezio / 2}`)
}

function calcularAreaCirculo() {
    let raioCirculo = Number(prompt('Qual o raio do circulo?'));
    alert(`Área do circulo: ${3.14 * raioCirculo ** 2}`)
}

let opcao = ''

function executarCalculo() {
    do {
        opcao = Number(prompt('Calculo de área das formas geométricas\n\n1. Calcular a área de um triângulo\n2. Calcular a área de um retângulo\n3. Calcular a área de um quadrado\n4. Calcular a área de um trapézio\n5. Calcular a área de um circulo\n6. Sair'))

        switch (opcao) {
            case 1:
                calcularAreaTriangulo()
                break
            case 2:
                calcularAreaRetangulo()
                break
            case 3:
                calcularAreaQuadrado()
                break
            case 4:
                calcularAreaTrapezio()
                break
            case 5:
                calcularAreaCirculo()
                break
        }
    } while (opcao != 6)
}
executarCalculo()
1
