const express = require("express");
const app = express();
const port = 3000;

let consoleMethod = (req, res, next) => {
  console.log(req.body);
  next();
};

let hello = (req, res) => {
  res.send("Hello World");
};

//<-->
app.use("/", express.json());
app.use("/", consoleMethod);
app.get("/", hello);

//<-->
app.post("/", hello);

//<-->
app.listen(port, () => console.log(`Servidor ON ${port}!`));
