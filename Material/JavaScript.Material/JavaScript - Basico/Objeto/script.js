/*var aluno = {
    nome: 'Guilherme', 
    notas: [7.5, 5.0]
}

var LestName = 'sobrenome';

aluno.matricula = 12345;
aluno['LestName'] = 'Reis'
console.log(aluno)

var aluno = new Object();
aluno.nome = 'Guilherme'
aluno,LestName = 'Reis'
aluno.nota = 0.5
console.log(aluno) */

function calcMedia(n1, n2){
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    nome:'Gulherme', 
    notas:[8, 8], 
    media: calcMedia 
}

console.log(aluno.nome)
console.log(aluno.media())

var aluno1 = {
    nome: 'Igor',
    notas: [5, 7.5],
    media:calcMedia 
}

console.log(aluno1.nome)
console.log(aluno1.media())