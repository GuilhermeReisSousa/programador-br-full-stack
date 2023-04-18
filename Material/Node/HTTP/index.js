// Imports
const http = require("http");
const url = require("url");
const fs = require("fs");

// Verificando o caminho
function handleFile(req, resp, callback) {
  let path = url.parse(req.url).pathname;
  let fileName = "." + path;

  fs.readFile(fileName, (err, data) => {
    if (err) {
      if (callback) {
        if (!callback(req, resp)) {
          resp.writeHead(404, { "Content-Type": "text/html" });
          resp.end("<h1>ERRO:17342682583</h1>");
        }
      }
    } else {
      resp.writeHead(200, { "Content-Type": "text/html" });
      resp.write(data);
      resp.end();
    }
  });
}

function handleRequest(req, resp) {
  let path = url.parse(req.url).pathname;

  let method = req.method;
  console.log(method);
  if (method == "PUT") {
    resp.writeHead(404, { "Content-Type": "text/html" });
  }
  if (path == "/teste") {
    resp.end("Teste");
    return true;
  }
  return false;
}

// Criando o servidor, fazendo um req e devolvendo uma resp
http
  .createServer((req, resp) => {
    handleFile(req, resp, handleRequest);
  })
  .listen(3000, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Servidor Online");
    }
  });
