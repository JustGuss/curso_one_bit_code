var atacante = prompt('insira o nome de um personagem');
var ataque = Number(prompt('insira o poder de ataque desse personagem'));

var defensor = prompt('insira o nome do seu oponente');
var vida = Number(prompt('insira a quantidade de pontos de vida do seu oponete'));
var defesa = Number(prompt('insira a quantidade de pontos de defesa do seu oponente:'));
var escudo = confirm('seu oponente possui um escudo?');

var dano = 0;

if (ataque > defesa && escudo == false) {
    dano = ataque - defesa;
    vida = vida - dano;
}
else if (ataque > defesa && escudo == true) {
    dano = (ataque / 2) - (defesa / 2);
    vida = vida - dano;
}
else if (ataque <= defesa) {
    dano = 0;
    vida = vida - dano;
}

alert(`${atacante} causou ${dano} de dano em ${defensor}. vida restante ${vida}`);