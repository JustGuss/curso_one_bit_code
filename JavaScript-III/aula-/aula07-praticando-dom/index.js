function addContact(){
    const contactSection = document.getElementById('contacts-list'); //seleciona o container "section" da pagina HTML.

    const h3 = document.createElement('h3'); //cria o elemento h3 porém para faze-lo aparecer na pagina HTML é preciso adiciona-lo como elemento filho dentro do container utilizando o "appendChild".

    h3.innerText = 'Contato';

    const ul = document.createElement('ul');

    const nameLi = document.createElement('li');
    nameLi.innerText = 'Nome: ';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'fullname';
    nameLi.appendChild(nameInput);
    ul.appendChild(nameLi); //"appendChild" adiciona o elemento como filho de outro elemento.

    const phoneLi = document.createElement('li');
    phoneLi.innerText = 'Telefone: ';
    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.name = 'phone';
    phoneLi.appendChild(phoneInput);
    ul.appendChild(phoneLi);

    const addressLi = document.createElement('li')
    addressLi.innerHTML = '<label for="address">Endereço: </label>'
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'
    addressInput.id = 'address'
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)

    contactSection.append(h3, ul); //"append" ao contrário da tag "appendChild", permite adicionar mais elementos de uma só vez.

}

function removeContact(){
    const contactSection = document.getElementById('contacts-list');

    const titles = document.getElementsByTagName('h3');
    const contacts = document.getElementsByTagName('ul');

    contactSection.removeChild(titles[titles.length - 1]);
    contactSection.removeChild(contacts[contacts.length - 1])
}