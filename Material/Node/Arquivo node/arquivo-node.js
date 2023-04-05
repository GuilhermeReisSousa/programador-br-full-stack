let fs = require("fs");

//Vamos colocar o arquivo-node.js em Uppercase não e facil e muita .Cuidado

let args = process.argv.slice(2);
let fileName = args[0];

fs.readFile(fileName, "UTF8", (error, data) => {
  if (error) throw error;

  fs.writeFile(fileName + "_UpperCase.txt", data.toUpperCase(), (error) => {
    if (error) throw error;
    console.log("Arquivo gerado com sucessor! ");
  });
});

//! adiciona alguma coisa em um arquivo ja existente ou cria ele
/*
fs.appendFile(
  "arquivo-node.txt",
  "Agora atualizamos com appendeFile",
  (error) => {
    if (error) {
      throws(error);
    }
    console.log("Aualizado.02 com sucesso");
  }
);
*/
//!Esse apaga o arquivo
/*fs.unlink(
  "arquivo-node.txt",
  "Agora atualizamos com appendeFile",
  (error) => {
    if (error) {
      throws(error);
    }
    console.log("Aualizado.02 com sucesso");
  }
);*/
//!Esse renomeia
/*fs.rename(
  "arquivo-node.txt",
  'Novo-nome.txt'
  "Agora atualizamos com appendeFile",
  (error) => {
    if (error) {
      throws(error);
    }
    console.log("Aualizado.03 com sucesso");
  }
);*/

//!Esse le um arquivo
/*fs.readFile(
  "arquivo-node.txt",
  "UTF8",
  (error, data) => {
    if (error) {
      throws(error);
    }
    console.log("data");
  }
);*/
