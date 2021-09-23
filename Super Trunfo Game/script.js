var carta1 = {
    nome:"Rey",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_lQuUoZCp63kTJKj-2-fQelFZhrt6Be4oZXUZz85zBCKSf69HAKze_cKiCPKDwRzC-Q&usqp=CAU",
    atributos: {
        Honrra: 40,
        Raiva: 9,
        Atitude: 9
    }
}

var carta2 = {
    nome:"Kylo Ren",
    imagem: "https://i.pinimg.com/originals/1f/15/85/1f15852b663bf3b24fd42dfd26ce0670.gif",
    atributos: {
        Honrra: 2,
        Raiva: 30,
        Atitude: 10
    }
}

var carta3 = {
    nome:"Resistência",
    imagem: "https://i.pinimg.com/originals/2c/52/d2/2c52d290eedc6fdcbf8f29eb08967965.jpg",
    atributos: {
        Honrra: 50,
        Raiva: 30,
        Atitude: 10
    }
}

var carta4 = {
    nome:"Death Trooper",
    imagem: "https://i.redd.it/lvlazn70eao61.png",
    atributos: {
        Honrra: 45,
        Raiva: 21,
        Atitude: 7
    }
}

var carta5 = {
    nome:"K2sO",
    imagem: "https://cdnb.artstation.com/p/assets/images/images/022/094/459/original/martin-sordes-k2so-gif.gif",
    atributos: {
        Honrra: 22,
        Raiva: 10,
        Atitude: 4
    }
}

var carta6 = {
    nome:"Darth Vader",
    imagem: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a2a0db68040289.5b4f1d9679b38.gif",
    atributos: {
        Honrra: 5,
        Raiva: 90,
        Atitude: 20
    }
}

var carta7 = {
    nome:"Leia Organa",
    imagem: "https://i.pinimg.com/originals/c1/35/6b/c1356b22cdf493d7f3d79a25c804e212.gif",
    atributos: {
        Honrra: 90,
        Raiva: 20,
        Atitude: 30
    }
}

var carta8 = {
    nome:"Han Solo",
    imagem: "https://i.pinimg.com/originals/5d/29/09/5d2909a02c455eb4f61cc383b673629c.gif",
    atributos: {
        Honrra: 15,
        Raiva: 40,
        Atitude: 40
    }
}

var carta9 = {
    nome:"R2-D2",
    imagem: "https://i.gifer.com/3qtp.gif",
    atributos: {
        Honrra:100,
        Raiva: 2,
        Atitude: 30
    }
}

var carta10 = {
    nome:"Obi-wan Kenobi",
    imagem: "https://i.pinimg.com/originals/da/6c/3b/da6c3bd0ddf53dacd01a4083c110ce0c.gif",
    atributos: {
        Honrra: 80,
        Raiva: 10,
        Atitude: 50
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
    exibirCartaJogador();
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo")
    for (var i=0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function obtemAtributo (){
    var radioAtributos = document.getElementsByName("atributo")
    for(var i=0; i < radioAtributos.length; i++){
      if (radioAtributos[i].checked == true){
        return radioAtributos[i].value
      }
    }
  }
  
  function jogar (){
    var atributoSelecionado = obtemAtributo()
    var elementoResultado = document.getElementById("resultado")
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
    
    if (valorCartaJogador > valorCartaMaquina) {
      htmlResultado = "<p class='resultado-final'>  Você venceu</p>";
    } else if (valorCartaMaquina > valorCartaJogador) {
      htmlResultado = "<p class='resultado-final'>  Você perdeu</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>  Empatou</p>";
    }
    elementoResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnSortear').disabled = false
    exibirCartaMaquina()
    
    console.log (cartaMaquina)
  }
  
  function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    
     var opcoesTexto = "";
  
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='"+
        atributo+
        "'>"+
        atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
  }
  
  function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    
     var opcoesTexto = "";
  
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " +  cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
  }
  