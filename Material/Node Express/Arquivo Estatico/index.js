const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use("/client", express.static(path.join(__dirname, "client")));
app.listen(port, () => console.log(`Servidor Rodando: Portal ${port}!`));
