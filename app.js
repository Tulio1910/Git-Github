
alert ('Boas vindas ao jogo do numero secreto');
let numeroSecreto = 9;
console.log('O numero secreto é \n' +  numeroSecreto);
let chute = prompt('Escolha um numero');
console.log('O numero do chute é ' + chute);

if (chute == numeroSecreto){

alert('Isso ai! você acertou o numero secreto é \n' + numeroSecreto);
} else if(chute > 5) {
    alert ('o numero secreto é menor mané');
} else alert ('o numero é maior zé');

