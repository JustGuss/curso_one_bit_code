
// 1m = 1000mm - milímetro (mm)

// 1m = 100cm - centímetro (cm)

// 1m = 10dm - decímetro (dm)

// 1m = 0,1dam - decâmetro (dam) x10

// 1m = 0,01 - hectômetro (hm)

// 0,001 - quilômetro (km)

const metros = Number(prompt('Digite a quantidade de metros que deseja converter para outra unidade de medida:'))
const medida = prompt("Converter para:\n\nmilímetros (mm)\ncentímetro (cm)\ndecímetro (dm)\ndecâmetro (dam)\nhectômetro (hm)\nquilômetro (km)")
let resultado = 1

switch (medida) {
    case 'mm':
        alert(`${metros}m são ${metros * 1000}mm (milímetros)`)
        break
    case 'cm':
        alert(`${metros}m são ${metros * 100}cm (centímetros)`)
        break
    case 'dm':
        alert(`${metros}m são ${metros * 10}dm (decímetro)`)
        break
    case 'dam':
        alert(`${metros}m são ${metros * 0.1}dam (decâmetro)`)
        break
    case 'hm':
        alert(`${metros}m são ${metros * 0.01}hm (hectômetro)`)
        break
    case 'km':
        alert(`${metros}m são ${metros * 0.001}km (quilômetro)`)

    default:
        alert('Opção inválida')

}
