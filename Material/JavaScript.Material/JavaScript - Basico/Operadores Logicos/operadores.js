//Operadores Lógicos servem para saber se um valor e Verdadeiro ou Falso
//&& e
//|| ou
//NEgativo

// var a = true;
// var b = false;

// var c = a && b; //Os 2 precisao ser vedadeiro
// console.log(c);

/*
var idade = 81;
var menor10 = idade <= 10;
var maior65 = idade >= 65;

var free  = menor10 || maior65;

console.log('Idade', idade);

console.log('Maior que 60', maior65);

console.log('Menor que 10', menor10);

console.log('Tem direito a gratuidade?', free) */

var idade = 17;
var maior20 = idade >= 20;
var menor20 = !maior20;

console.log('Maior que vinte: ',maior20);
console.log('Menor que vinte: ',menor20);
console.log(!true)