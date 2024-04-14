export default function calculate() {
    const resultInput = document.querySelector("#result")
    resultInput.value = 'ERROR';
    resultInput.classList.add('error');
    const result = eval(input.value);
    //o método "eval" avalia o codigo, "roda" o que é passado para ele. Por esta razão é um método que pode gerar uma falha de segurança ja que o usuário pode rodar um codigo javascript pelo metodo.
    resultInput.value = result;
    resultInput.classList.remove('error');
}   