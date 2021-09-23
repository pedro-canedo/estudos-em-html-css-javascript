var carta1 = {
    nome:"Rey",
    atributos: {
        Honrra: 40,
        Raiva: 9,
        Atitude: 9,
        Trunfos: 30
    }
}

var carta2 = {
    nome:"Kylo Ren",
    atributos: {
        Honrra: 2,
        Raiva: 30,
        Atitude: 10,
        Trunfos: 28
    }
}

var carta3 = {
    nome:"Resistência",
    atributos: {
        Honrra: 50,
        Raiva: 30,
        Atitude: 10,
        Trunfos: 13
    }
}

var carta4 = {
    nome:"Death Trooper",
    atributos: {
        Honrra: 45,
        Raiva: 21,
        Atitude: 7,
        Trunfos: 15
    }
}

var carta5 = {
    nome:"K2sO",
    atributos: {
        Honrra: 22,
        Raiva: 10,
        Atitude: 4,
        Trunfos: 3
    }
}

var carta6 = {
    nome:"Darth Vader",
    atributos: {
        Honrra: 5,
        Raiva: 90,
        Atitude: 20,
        Trunfos: 40
    }
}

var carta7 = {
    nome:"Leia Organa",
    atributos: {
        Honrra: 90,
        Raiva: 20,
        Atitude: 30,
        Trunfos: 20
    }
}

var carta8 = {
    nome:"Han Solo",
    atributos: {
        Honrra: 15,
        Raiva: 40,
        Atitude: 40,
        Trunfos: 2
    }
}

var carta9 = {
    nome:"R2-D2",
    atributos: {
        Honrra:100,
        Raiva: 2,
        Atitude: 30,
        Trunfos: 2
    }
}

var carta10 = {
    nome:"Obi-wan Kenobi",
    atributos: {
        Honrra: 80,
        Raiva: 10,
        Atitude: 50,
        Trunfos: 30
    }
}

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10]

var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 11);
    cartaMaquina = cartas[numeroCartaMaquina];
    var numeroCartaJogador = parseInt(Math.random() * 11);
    cartaJogador = cartas[numeroCartaJogador];
    while (numeroCartaMaquina == numeroCartaJogador) {
        var numeroCartaJogador = parseInt(Math.random() * 11);
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador);
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirOpcoes();
}

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
        opcoes.innerHTML = opcoesTexto;
    }
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo")
    for (var i=0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "Parabéns Você venceu"
    }else if(valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "Infelismente Você perdeu"
    }else {
        elementoResultado.innerHTML = "Empatou"
    }
}