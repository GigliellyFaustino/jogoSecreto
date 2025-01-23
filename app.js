//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; 

let numeroLimite = 1000;
let tentativas = 1;

let listaDeNumerosSorteados = [];

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

let numeroSecreto = gerarNumeroAleatorio();




function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto 2.0');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 1000');
}
    
exibirMensagemInicial();

function verificarChute() {
   let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    console.log(numeroSecreto);
if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Você acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = (`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);
    
    exibirTextoNaTela('p', mensagemTentativas);  
    document.getElementById('reiniciar').removeAttribute('disabled');

} else {
    if (chute > numeroSecreto) {
        exibirTextoNaTela('h1', 'o numero secreto é menor');
        exibirTextoNaTela('p', 'tente outro numero');
    } else {
        exibirTextoNaTela('h1', 'o numero secreto é maior');
        exibirTextoNaTela('p', 'tente outro numero');
        } 
        tentativas ++;
        limparCampo();
      }
}
 
function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1; 
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
