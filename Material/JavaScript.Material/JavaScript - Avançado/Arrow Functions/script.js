let dobro = (x) => {console.log(this)};

// let dobro = function() {
//     return 2 * this.x
// }

let numero = {
    x: 12,
    d: dobro
}

console.log(numero.d());
