function addPlayer(){
    const position = document.getElementById('position').value;
    const name = document.querySelector('#name').value;
    const number = document.querySelector('#number').value;

    const confirmacao = confirm(`Deseja escalar o jogador ${name} número ${number} na posição de ${position}?`);

    if(confirmacao){
        const teamList = document.querySelector('#teamList');
        const playerItem = document.createElement('li');
        playerItem.id = 'player-' + number;
        playerItem.innerText = position + ' ' + name + ' ' + ' (' + number + ')';
        teamList.appendChild(playerItem)

    document.getElementById('position').value = ''
    document.querySelector('#name').value = ''
    document.querySelector('#number').value= ''
    }
}
 
function removePlayer(){
    const numberToRemove = document.getElementById('numberToRemove').value;
    const PlayerToRemove = document.getElementById('player-' + numberToRemove);

    const confirmacao = confirm('Deseja remover ' + PlayerToRemove.innerText + ' da escalação do time?');

    if(confirmacao){
        //document.getElementById('teamList').removeChild(PlayerToRemove)
        PlayerToRemove.remove()

        document.getElementById('numberToRemove').value = ''
    }

}