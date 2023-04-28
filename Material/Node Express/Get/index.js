const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use("/client", express.static(path.join(__dirname, "client")));
app.get("/", (req, res) => {
  res.type("html");
  res.send("<h1>GET request to the homepage</h1>");
});

/* 
res.type('.html') => 'text/html'

res.type('html') => 'text/html'

res.type('txt') => 'text/plain'

res.type('json') => 'application/json'

res.type('application/json') => 'application/json'

res.type('png') => 'image/png'
*/

//Abrir o servidor
app.listen(port, () => {
  console.log(`Server Running port: ${port}!`);
});
