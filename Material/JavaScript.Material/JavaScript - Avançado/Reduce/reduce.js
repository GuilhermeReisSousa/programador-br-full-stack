function novoAluno(name, age) {
    return {name, age}
}
let alunos = [
    novoAluno("Gui", 10), 
    novoAluno("lher", 20), 
    novoAluno("me", 30), 
]

function id (call, aluno) {
    return call + aluno.name
}

console.log(alunos.reduce(id, ""))