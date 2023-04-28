const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use("/mysite", express.static(path.join(__dirname, "client")));

app.get("/", (req, res) => {
  res.send("<h1>GET request to the homepage</h1>");
});

app.post("/", (req, res) => {
  res.send("<h1>POST request to the homepage</h1>");
});

app.put("/", (req, res) => {
  res.send(`<h1>PUT request to the homepage</h1>`);
});

app.delete("/", (req, res) => {
  res.send(`<h1>DELETE request to the homepage</h1>`);
});

//Server
app.listen(port, () => console.log(`Server on in port: ${port}!`));
