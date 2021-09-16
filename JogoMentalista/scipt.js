const elementoResultado = document.getElementById("resultado");
const elementoChutar = document.getElementById("chutar");
const elementoChute = document.getElementById("valor");
const elementoVidas = document.getElementById("vidas");

Reiniciar();

function Reiniciar() {
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 3;
  elementoChute.value = "";
  elementoResultado.innerHTML = "";
  elementoChutar.innerHTML = "Chutar";
  elementoChutar.setAttribute("onclick", "Chutar()");
  elementoChute.removeAttribute("disabled");
  elementoChutar.setAttribute("class", "fundoAzul");
  console.log("RESPOSTA: " + numeroSecreto);
  document.body.style.backgroundImage =
    "url('http://pa1.narvii.com/6513/b005cfde7be84561b0480d248c134701c4e0b4df_00.gif')";
  VerificaVidas();
}

function Chutar() {
  while (tentativas > 0) {
    const chute = parseInt(elementoChute.value);
    if (chute < 0 || chute > 10 || isNaN(chute)) {
      alert("Você deve chutar um número entre 0 e 10");
      return;
    }
    tentativas--;
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML =
        "Você ACERTOU!<br> Era o nº " + numeroSecreto; 
      document.body.style.backgroundImage =
        "url('https://acegif.com/wp-content/uploads/firework-3.gif')";
      ResetButton();
      return;
    } else if (numeroSecreto < chute && tentativas > 0) {
      elementoResultado.innerHTML = "É menor que " + chute;
      VerificaVidas();
      return;
    } else if (numeroSecreto > chute && tentativas > 0) {
      elementoResultado.innerHTML = "É maior que " + chute;
      VerificaVidas();
      return;
    }
  }
  elementoResultado.innerHTML = "Você PERDEU! <br> Era o nº " + numeroSecreto;
  VerificaVidas();
  ResetButton();
}

function ResetButton() {
  elementoChutar.setAttribute("onclick", "Reiniciar()");
  elementoChute.setAttribute("disabled", "disable");
  elementoChutar.innerHTML = "Reiniciar";
  elementoChutar.setAttribute("class", "fundoVerde");
}

function VerificaVidas() {
  if (tentativas == 2) {
    elementoVidas.style.objectPosition = "-24px";
  } else if (tentativas == 1) {
    elementoVidas.style.objectPosition = "-48px";
  } else if (tentativas == 0) {
    elementoVidas.style.objectPosition = "-72px";
  } else {
    elementoVidas.style.objectPosition = "0px";
  }
}

//Chama a função Chutar() se o usuário teclar ENTER no campo de chute
elementoChute.addEventListener("keyup", function (e) {
  var key = e.which || e.keyCode;
  if (key == 13) {
    Chutar();
  }
});