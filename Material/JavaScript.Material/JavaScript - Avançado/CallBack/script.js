let usuarios = ["adriano", "marcia", "jose", "guilherme"];

function inserirUsuario(nome, callback) {
    setTimeout(() => {
        usuarios.push(nome);
        callback();
    }, 1000);
}

function listaUsuarios() {
    console.log(usuarios);
}

inserirUsuario("igor", listaUsuarios);
