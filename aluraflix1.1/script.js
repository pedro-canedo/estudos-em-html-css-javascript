function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var listaUrl = []
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela (filmeFavorito)
    lista.push(filmeFavorito)
  } else {
    console.error("Endereço de filme invalido");
  }
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela (filmeFavorito) {
  console.log(filmeFavorito)
  var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = elementoFilmeFavorito + elementoFilmeFavorito;
  
}
