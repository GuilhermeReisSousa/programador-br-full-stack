//*aqui mudamos o input
//! Alteramos o valor no .value tem que descomentar e comentar a linha 21 para ver a diferença
// console.log($("#input").val("Feijão"));
//! alteremos o atributo name:""
console.log($("#input").attr("name", "Nome da lista"));

//!aqui vemos a diferenca de .text para .html usada direto no elemento ( nem todos se comportao dessa forma )
console.log($(".item1").text("Mudar o texto 1"));
console.log($(".item2").html("Mudar o texto 2"));

//! tem que comentar essa linha abaixo para ver a diferença
console.log($("#lista2").html("Era para ter um li aqui"));

//* aqui adicionamos um atributo em um elemento
console.log(
  $("li").attr("name", function (index, oValue) {
    return oValue + index;
  })
);

//*aqui adicionamos um atributo em um elemento
$("#input").attr("maxlength", 5).attr("type", "password");
