var pessoas = {
  nome: "Guilherme",
  idade: 18
};

var contato = {
  contato: "gui_ilza29@gmail.com",
  telefone: 1167851084
};

let resultadoCadastro = {...pessoas, ...contato}

console.log(resultadoCadastro);
