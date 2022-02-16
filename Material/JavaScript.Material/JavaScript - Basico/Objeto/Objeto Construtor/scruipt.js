// function criarAluno(nome, n1, n2){
//     return{
//         nome: nome, 
//         notaA: n1,
//         notaB: n2,
//         media: function(){
//             return(this.notaA + this.notaB) / 2;
//         } 
//     }
// }

function aluno(nome, n1, n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function(){
        return ( this.nota1 + this.nota2) / 2;
    }
}

// var turma = [
//     criarAluno('Guilherme', 5, 8),
//     criarAluno('Igor', 4, 10),
//     criarAluno('Ilza', 10, 10)
// ]

// var aluno = turma[0]

var a = new aluno('Guilherme', 8, 7)

console.log(a.media())

// for(var aluno of turma){
//     console.log(aluno.nome + ' - ' + aluno.media());
// }