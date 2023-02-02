// isso so funciona pra objetos =>
let aluno = {
  matricula: 51,
  nome: "José",
  telefone: 2395,
  cidade: "São Paulo",
};

let { matricula: Codigo, telefone: Whatzapp, cidade: Localizacao } = aluno;

console.log(Codigo, Whatzapp, Localizacao);

//isso so funciona pa Array =>
let alunos = ["nome-1", "nome-2", "nome-3"];

let [primeiroNome, , ultimoNome] = alunos;

console.log(primeiroNome, ultimoNome);
