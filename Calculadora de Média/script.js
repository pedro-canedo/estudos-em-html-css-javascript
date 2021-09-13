var nome = "Pedro"
var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 7
var notaDoTerceiroBimestre = 4
var notaDoQuartoBimestre = 5
var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixa = notaFinal.toFixed(1)

console.log("Bem vindo " + nome)
console.log("Olá "+ nome + " a sua nota final é: " + notaFixa)
if(notaFixa >=6){
  console.log("Parabéns você foi aprovado")
}else{
  console.log("Você foi reprovado")
  }



//Revisão
//Variáveis, Strings, console.log, toFixed, operações, matemáticas, concatenação