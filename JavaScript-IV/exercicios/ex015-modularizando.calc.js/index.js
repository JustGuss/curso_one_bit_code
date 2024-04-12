const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.querySelector('#input');
const resultInput = document.querySelector('#result');

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
        const value = charKeyBtn.dataset.value;
        //"dataset" é utilizado para acesar um atributo "data", um atributo personalizavel
        input.value += value;
    })
})

document.querySelector('#clear').addEventListener('click', function(){
    input.value = '';
    input.focus(); 
    //"focus" serve para focar no input
})

input.addEventListener('keydown', function (ev) {
    ev.preventDefault(); //previne que o input de texto receba o texto digitado

    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key;
        return;
        //verifica se os caracteres digitados no input estão presentes na lista "allowedKeys" e adiciona ao input se sim.
    }
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1);
        //ao apertar "Backspace" remove o ultimo caracter adicionado ao input.
    }
    if (ev.key === 'Enter') {
        calculte();

    }
})

document.querySelector('#equal').addEventListener('click', calculate)

function calculate() {
    resultInput.value = 'ERROR';
    resultInput.classList.add('error');
    const result = eval(input.value);
    //o método "eval" avalia o codigo, "roda" o que é passado para ele. Por esta razão é um método que pode gerar uma falha de segurança ja que o usuário pode rodar um codigo javascript pelo metodo.
    resultInput.value = result;
    resultInput.classList.remove('error');
}   

document.querySelector('#copyToClipboard').addEventListener('click', function(ev){
    const button = ev.currentTarget;
    if (button.innerText === 'Copy') {
        button.innerText === 'Copied!';
        button.classList.add('success');
        navigator.clipboard.writeText(resultInput.value);
    } else {
        button.innerText = 'Copy';
        button.classList.remove('success');
    }
})

document.querySelector('#themeSwitcher').addEventListener('click', function(){
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#f1f5f9');
        root.style.setProperty('--border-color', '#aaa');
        root.style.setProperty('--font-color', '#212529');
        root.style.setProperty('--primary-color', '#26834a');
        main.dataset.theme = 'light';
    } else {
        root.style.setProperty('--bg-color', '#212529');
        root.style.setProperty('--border-color', '#666');
        root.style.setProperty('--font-color', '#f1f5f9');
        root.style.setProperty('--primary-color', '#4dff91');
        main.dataset.theme = 'dark';
    }
})