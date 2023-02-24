//Jeito certo
$("#btn1").click(() => {
  $("ul").find("[criar = item-2]").toggle("slow", "linear");
});

//Jeito errado
$("#btn2").click(() => {
  $("ul").find(".item2").toggle("slow", "linear");
});
