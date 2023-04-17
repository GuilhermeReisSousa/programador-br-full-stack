const http = require("http");

http
  .createServer((resquest, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1>Hello World!</h1>");
  })
  .listen(3000, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Servidor Iniciado na Porta 3000");
    }
  });
