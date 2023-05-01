// 1- importar tudo /  2- abir o servidor / 3- fazer a aplicação
const express = require("express");
const app = express();
const port = 3000;
const alunos = [
  { id: 0, name: "Maria" },
  { id: 1, name: "Douglas" },
  { id: 2, name: "Lucas" },
  { id: 3, name: "Guilherme" },
  { id: 4, name: "Elias" },
  { id: 5, name: "Ilza" },
];
app.use(express.urlencoded());

app.get("/alunos", (req, res) => {
  let aluno = alunos[req.body.posicao];
  res.json(aluno);
});

app.get("/alunos/:posicao", (req, res) => {
  let aluno = alunos[req.params.posicao];
  res.json(aluno);
});

// > servidor
app.listen(port, () => console.log(`Servidor ON ${port}!`));
