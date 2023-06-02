const express = require("express");
const path = require("path");
const app = express();

let user = {
  name: "Guilherme",
  phone: "(12) 1256 - 0856"
} 

app.set("./views/index.ejs", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", user);
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
