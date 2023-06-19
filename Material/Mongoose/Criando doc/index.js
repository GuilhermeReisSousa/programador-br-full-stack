const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

const personSchema = mongoose.Schema({
  title: { type: String, require: true },
  description: String,
  url: { type: String, require: true },
  click: { type: Number, default: 0 },
});

const Person = mongoose.model("Person", personSchema);

let person = new Person({
  title: "buscandoDoc",
  description: "",
  url: "www.google.com",
});

person
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.connect("mongodb://127.0.0.1:27017/newlink", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

db.on("erro", () => {
  console.log("Houve um erro: ");
});
db.once("open", () => {
  console.log("Tudo certo");
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
