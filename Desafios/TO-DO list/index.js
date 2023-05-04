const express = require("express");
const app = express();
app.use(express.json()); // Sem isso não funciona

let posts = [
  {
    id: "001",
    title: "Teste01",
    desc: "Teste teste teste 01",
  },
];

app.get("/all", (req, res) => {
  res.json(posts);
});

app.post("/new", (req, res) => {
  let id = generateId();
  let title = req.body.title;
  let desc = req.body.desc;

  posts.push({ id, title, desc });

  res.send("Tudo OK");
});

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

app.listen(3000, () => console.log(`Servidor ON porta: ${3000}!`));
