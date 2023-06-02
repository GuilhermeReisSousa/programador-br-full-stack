const express = require("express");
const path = require("path");
const app = express();

let usersJS = [
  {
    id: 0,
    name: "guilherme",
    phone: "(12) 1256 - 0856",
  },
  {
    id: 1,
    name: "igor",
    phone: "(12) 1256 - 0856",
  },
  {
    id: 2,
    name: "jose",
    phone: "(12) 1256 - 0856",
  },
];

//app.set usar sempre assim.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", { usersHTML: usersJS });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
