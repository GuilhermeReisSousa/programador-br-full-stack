//separando em modulos, estou exports esse modulo para o inserindo-argumentos.js ela eu require
let calc = {
  mult: (x, y) => {
    return x * y;
  },

  div: (x, y) => {
    return x / y;
  },
};

module.exports = calc;
