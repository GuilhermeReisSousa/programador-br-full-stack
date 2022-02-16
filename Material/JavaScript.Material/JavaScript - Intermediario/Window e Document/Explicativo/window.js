//Para ver isso e melhor usar o console do google 
//Podemos brincar no console do google, e bem melhor do que no vscode 
//Window tem muitos metodos, alguns nao precisamos chamar o Window. podemos so colocar o metodo direto ex:
console.log('Olá Mundo')
// alert('Olá Mundo')

var aluno = {
    nome: 'Guilherme',
    idade:17
}    

for(descri in aluno){
    console.log('O Aluno ' + aluno.nome + ' tem a idade ' + aluno.idade + ' anos ')
}