function addContact(){
    const contactSection = document.getElementById('contacts-list');

    const h3 = document.createElement('h3');
    h3.innerText = 'Contato';

    const ul = document.createElement('ul');

    const nameLi = document.createElement('li');
    nameLi.innerText = 'Nome: ';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'fullname';
    nameLi.appendChild(nameInput);
    ul.appendChild(nameLi);

}