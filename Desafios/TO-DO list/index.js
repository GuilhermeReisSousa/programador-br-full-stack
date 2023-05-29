const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const bodyParser = require("body-parser");
const apiRoute = require("./routes/api");

//Mesma ja sendo nativo, devemos colocor isso para evitar bugues
app.use(bodyParser.json());

//Para garantir que um chamda a api não busque por uma pasta chamada api, devemos colocor isso primeiro
app.use("/api", apiRoute);
app.use("/", express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
