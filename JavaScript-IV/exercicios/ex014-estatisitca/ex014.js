//Média aritmética simples

const MediaSimples = (...numbers) => {
    let sum = numbers.reduce((accum, current) => accum + current, 0);
    return sum / 2;
}
console.log(MediaSimples(1, 2, 3, 4)) // 1 + 2 + 3 + 4 / 2 = 5


//Média Aritmética Ponderada

let n1 = {
    numero: 2,
    peso: 2
}

const n2 = {
    numero: 3,
    peso: 3
}

const n3 = {
    numero: 4,
    peso: 4
}

const MediaPonderada = (n1, n2, n3) => {
    const sum = (n1.numero * n1.peso) + (n2.numero * n2.peso) + (n3.numero * n3.peso);
    return sum / 2;
}
console.log(MediaPonderada())