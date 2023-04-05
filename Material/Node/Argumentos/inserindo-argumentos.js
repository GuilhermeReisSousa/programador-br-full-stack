// basica mente muito arrays entao presta atenção em qual posição vc vai mexer.
let base10 = require("../modulos").base10;
let calc = require("../exports-require");
let args = process.argv.slice(2);

let a = Number(args[1]);
let b = Number(args[2]);
let c = "";

if (args[0] == "soma") {
  c = soma(a, b);
} else if (args[0] == "mult") {
  c = calc.mult(a, b);
} else if (args[0] == "menos") {
  c = menos(a, b);
} else if (args[0] == "div") {
  c = calc.div(a, b);
} else if (args[0] == "base10") {
  c = base10(a);
} else {
  console.log("Opção invalida");
}

function soma(x, y) {
  return x + y;
}

function menos(x, y) {
  return x - y;
}

console.log(c);
