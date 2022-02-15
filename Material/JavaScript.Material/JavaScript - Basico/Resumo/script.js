// Nome do aluno - nota 1 - nota 2 - media- aprovado ou reprovado

var nomes = ['Igor', 'José', 'Maria'];
var notaA = [7.0, 6.5, 9.5];
var notaB = [8.0, 7.0, 8.5];

function media(n1, n2){
    return (n1 + n2) / 2;
}

function passou(media){
    if(media > 7){
        return 'Aprovado';
    }else{
        return 'Reprovado';
    }
}

for(var index in nomes){

    var nota1 = notaA[index];
    var nota2 = notaB[index];

    var m = media(nota1, nota2);

    console.log(nomes[index] +
        ' - ' + 
        nota1 + 
        ' - ' + 
        nota2 +
        ' - ' +
        passou(m));
}