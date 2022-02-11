var nota1 = 8.0;
var nota2 = 1.0;
var media = (nota1 + nota2) / 2;
var res = ''

if( media >= 8 ){
    res = 'Ótimo';
}

else if( media > 6.5){
    res = 'Bom';
}

else{
    res = 'Regular'
}

console.log(media);
console.log(res);

switch(res){
    case 'Ótimo':
        console.log('Parabéns , Você e um ótimo aluno');
        break;

    case 'Bom':
        console.log('Você está quase perfeito');
        break;

    case'Regular':
        console.log('Estuda mais um pouco');
        break;

    default:
    console.log('Houve alguma erro')
    break;
}
