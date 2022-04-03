let usuarios = ["Adriano", "Jose", "Marcia", "igor"];

function inserirUsuario(nome, callback) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      usuarios.push(nome);

      let erro = false;

      if (!erro) {
        resolve();
      } else {
        reject({
          msg: "ERRO: 092-253",
        });
      }
    }, 1000);
  });
  return promise;
}

function listarUsuarios() {
  console.log(usuarios);
}

async function executar() {
  await inserirUsuario("guilherme");
  listarUsuarios();
}

executar();
