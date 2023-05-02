const express = require("express");
const router = express.Router();

const alunos = [
  { id: 0, name: "Maria" },
  { id: 1, name: "Douglas" },
  { id: 2, name: "Lucas" },
  { id: 3, name: "Guilherme" },
  { id: 4, name: "Elias" },
  { id: 5, name: "Ilza" },
];

router.get("/", (req, res, next) => {
  console.log(req.query);

  let aluno = alunos[req.query.id];
  if (aluno) {
    res.json(aluno);
  } else {
    next();
  }
});

router.get("/:id", (req, res) => {
  let aluno = alunos[req.params.id];
  res.json(aluno);
});

router.get("/all", (req, res) => {
  console.log(alunos);
  res.json(alunos);
});

module.exports = router;
