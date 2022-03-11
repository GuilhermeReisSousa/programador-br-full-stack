var jogador = document.getElementById("jogador");

var xInicial = 0;
var yInicial = 0;

function moverJogadorPara(x, y) {
   
    let posX = x + "px";
    let posy = y + "px";

  jogador.style.top = posX;
  jogador.style.left = posy;

}

setInterval(function() {
    moverJogadorPara(xInicial++, yInicial++);
}, 10);
