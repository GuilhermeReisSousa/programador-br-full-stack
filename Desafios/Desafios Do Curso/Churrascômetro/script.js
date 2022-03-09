//Carne - 400g pro pessoa + de 6 horas - 650
//Cerveja - 1200ml por pessoa + de  6 horas - 2000 ml
//Refrigerente / água - 1000 ml pro pessoas + de 6 horas 1500 ml

// crianças valem por 0,5

var inputAdultos = document.getElementById("adultos");
var inputCriancas = document.getElementById("criancas");
var inputDuracao = document.getElementById("duracao");

var res = document.getElementById("res");

function calcular() {

    let criancas = inputCriancas.value;
    let adultos = inputAdultos.value;
    let duracao = inputDuracao.value

    let carneTotal = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let cervejaTotal = cervejaPP(duracao) * adultos;
    let bebidasTotal = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    res.innerHTML = `<p>${carneTotal / 1000} K.g de Carne<p>`
    res.innerHTML += `<p>${Math.ceil(cervejaTotal / 355)} Latas de Cerveja<p>`
    res.innerHTML += `<p>${bebidasTotal / 2000} Litros de Bebidas<p>`
}

function carnePP(duracao) {
    if(duracao >= 6){
        return 650;
    }else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPP(duracao) {
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}
