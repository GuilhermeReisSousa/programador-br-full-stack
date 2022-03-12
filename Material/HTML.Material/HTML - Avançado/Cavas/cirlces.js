let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

let x = 250;
let y = 250;
let raio = 100;

let inicio = 0 //a medida e em radianos ( unidade de madida de circulo )
let fim = 1 * Math.PI;

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillStyle = "red";

ctx.arc(x, y, raio, inicio, fim)
// ctx.arc(x, y, raio, angulo inicial, angulo final ) Separar em lets ajuda

ctx.fill();
ctx.stroke();
