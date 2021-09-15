function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    var valorEmReal = valorEmDolarNumerico * 5.25;
    var valorEmEuro = valorEmDolarNumerico * 0.85;
    var valorEmBitcoin = valorEmDolarNumerico * 0.000021;
  
    //Conversor para Real
    var elementoValorConvertidoReal = document.getElementById("valorConvertidoReal");
    var valorConvertidoReal = "O valor em Real é R$:" + valorEmReal;
    elementoValorConvertidoReal.innerHTML = valorConvertidoReal;
  
    //Conversor para Euro
    var elementoValorConvertidoEuro = document.getElementById("valorConvertidoEuro");
    var valorConvertidoEuro = "O valor em Euro é €: " + valorEmEuro;
    elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;
  
    //Conversor para Bitcoin
  
    var elementoValorConvertidoBitcoin = document.getElementById("valorConvertidoBitcoin");
    var valorConvertidoBitcoin = "O valor em BitCoin é ₿: " + valorEmBitcoin;
    elementoValorConvertidoBitcoin.innerHTML = valorConvertidoBitcoin;
  }
  
  function ConverterDistancia() {
    var valorAnoLuz = "";
    var valorEmKm = "";
    var anoLuzEmKm = 94608;
  
    valorAnoLuz = document.getElementById("distancia").value;
    valorEmKm = parseFloat(valorAnoLuz) * anoLuzEmKm;
  
    document.getElementById("distanciaAnosLuz").innerHTML = `Resultado: Ao viajar por ${valorAnoLuz} anos Luz, Você percorrera ${valorEmKm} * 10⁸Km`;
  }
  
  function ConverterTemperatura() {
    var temperaturaEntrada = document.getElementById("celsius");
    var entradaCelsius = temperaturaEntrada.value;
    var temperaturaCelsius = parseFloat(entradaCelsius);
    var temperaturaFarenhide = temperaturaCelsius * 33.8;
    var temperaturaKelvin = temperaturaCelsius * 274.15;
  
    //Conversor para Farenhide
    var elementoTemperaturaFarenhide = document.getElementById("tempfarenhide");
    var tempfarenhide = temperaturaCelsius + "ºC equivale á:" + temperaturaFarenhide.toFixed(1) + " °F";
    elementoTemperaturaFarenhide.innerHTML = tempfarenhide;
    
      //Conversor para kelvin
    var elementoTemperaturakelvin = document.getElementById("tempkelvin");
    var tempkelvin = temperaturaCelsius + "ºC equivale á:" + temperaturaKelvin.toFixed(1) + " °K";
    elementoTemperaturakelvin.innerHTML = tempkelvin;
  }