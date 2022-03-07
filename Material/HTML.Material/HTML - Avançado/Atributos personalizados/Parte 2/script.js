let lista = document.getElementById("lista");

let num = Number(lista.getAttribute("data-num"));

let id = Number(lista.dataset.id);

console.log(id);

console.log(lista.dataset.num);

let conteudo = " ";

for (let i = 0; i < num; i++) {
  conteudo += "<li>" + i + "</li>";
}

lista.innerHTML = conteudo;
