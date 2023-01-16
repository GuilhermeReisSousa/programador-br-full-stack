//** Carne - 400g por pessoas ++ de 6 horas 650g
//** Cerveja - 1200 ml por pessoas ++ 6 horas - 2000ml (2 litros)
//** Refrigerante/agua - 1000 ml (1 litro) por pessoa ++ 6 horas 1500ml (1,5 litros)
//! criança valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular() {
  let adultos = inputAdultos.value;
  let criacncas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qtdcarnePP = carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criacncas;
  let qtdcervejaPP = cervejaPP(duracao) * adultos;
  let qtdbebidaPP = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2) * criacncas;

  resultado.innerHTML = `<p>${qtdcarnePP / 1000}Kg de Carne</p>`
  resultado.innerHTML += `<p>${Math.ceil(qtdcervejaPP / 355)} Latas de Cerveja</p>`
  resultado.innerHTML += `<p>${qtdbebidaPP / 1000} Litros de Bebibas</p>`
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidaPP(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
