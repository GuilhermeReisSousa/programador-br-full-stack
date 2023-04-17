const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, resp) => {
    let path = url.parse(req.url).pathname;
    let fileName = "." + path;

    fs.readFile(fileName, (err, data) => {
      if (err) {
        resp.writeHead(404, { "Content-Type": "text/html" });
        resp.end("ERRO, nao encontrado");
      } else {
        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.write(data);
        resp.end();
      }
    });
  })
  .listen(3000, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Tudo certo");
    }
  });
