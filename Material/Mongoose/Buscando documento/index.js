const express = require("express");
const app = express();
const port = 8081;
const mongoose = require('mongoose')
const searchRouter = require('./Routers/searchRouter')

mongoose.connect("mongodb://127.0.0.1:27017/newlink", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", () => {console.log("Error: ")});

db.once("open", () => {});

app.use('/', searchRouter)
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
