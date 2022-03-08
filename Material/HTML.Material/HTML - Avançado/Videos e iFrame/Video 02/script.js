var video = document.getElementById("video1");
var controle = document.getElementsByClassName("controle");

function retroceder() {
  video.currentTime -= 15;
}

function avancar() {
  video.currentTime += 15;
}

function diminuir_v() {
  video.playbackRate -= 0.25;
}

function aumentar_v() {
  video.playbackRate += 0.25;
}

function play() {
  video.play();
}

function pausar() {
  video.onpause();
  video.currentTime = 0;
}