//se tiver um erro ele continua executando o codigo
let nome = ""
try {
    if (nome == "") {
        throw "O nome não pode ser vazio"
    }

    console.log(nome)
} catch (error) {
    console.log("Houve um erro")
} finally {
    console.log("Boa noite");   
}