import { name, label, input, br } from './functions.js'
//para utilizar a sintaxe "import, from" é necessário definir o "type" do arquivo HTML como "module"

console.log(label({ for: 'fullname', textContent: 'Nome Completo'}));
console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...'}))
console.log(br())