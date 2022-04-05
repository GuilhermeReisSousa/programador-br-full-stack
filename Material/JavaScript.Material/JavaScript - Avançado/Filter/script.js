let aluno = [];

function novoAluno(nome,idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno("Guilherme", 23),
    novoAluno("José", 45),
    novoAluno("Maria", 18),
    novoAluno("João", 35)
]

function temMenosde30(aluno) {
    return aluno.idade < 30
}

function temMaisde30(aluno) {
    return aluno.idade > 30
}

function filtro(callback) {
    let alunosFiltrados = [];
    for(let aluno of alunos) {
        if(callback(alunos)) {
            alunosFiltrados.push(aluno)
        }
    }
    return alunosFiltrados
}

console.log(filtro(temMenosde30));