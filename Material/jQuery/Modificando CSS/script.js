//coletando infor
$("body").css("color");

//mudando (olhar o arquivo css)
$("body").css("background-color", "green");
console.log($("body").css("background-color"));

//criando um função que tira se tiver e colocar se não tiver
$("#my-button").click(() => {
  $("body").toggleClass("tr");
});
