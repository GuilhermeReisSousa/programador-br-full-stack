// function novoAluno(nome, idade) {
//   return { nome, idade };
// }

// let alunos = [
//   novoAluno("Maria", 23),
//   novoAluno("José", 45),
//   novoAluno("Marcia", 29),
//   novoAluno("João", 35),
// ];

// function alunoDaquiA5anos(aluno) {
//   let novoAluno = aluno;
//   novoAluno.idade += 5;
//   return novoAluno;
// }

// console.log(alunos.map(alunoDaquiA5anos));

let alunoA = {nome: "Guilherme", idade: 15};

let alunoB = {...alunoA}

alunoB.idade = 25;

console.log(alunoB)