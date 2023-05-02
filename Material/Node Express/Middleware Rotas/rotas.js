const express = require("express");
const app = express();
const alunos = require("./routes/router");

app.use(express.urlencoded({ extended: true }));

app.use("/aluno", alunos);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// > servidor
app.listen(3000, () => console.log(`Servidor ON 3000!`));
