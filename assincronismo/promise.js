/**
 * Assincronismo
 * Promise
 * @author Guilherme Holi
 */

const input = require('readline-sync')
let login, senha

//estrutura de dados (simular um banco de dados)
const database = {
    admin: {
        usuario: "Administrador",
        senha: "password"
    },
    prof: {
        usuario: "Guilherme Henrique",
        senha: "123456"
    }
}

//autenticação do usuario

console.clear()
console.log("--------------------------")
console.log("         USUARIO          ")
console.log("--------------------------")
login = input.question("login: ")
senha = input.question("senha: ")
console.log("--------------------------")


function logar(login, senha) {
    //uso de promise (acesso ao banco de dados)
    return new Promise((resolv, reject) => (
        //simulação de delay no acsso ao banco
        setTimeout(() => {
            // se existir o banco de dados do usuario
            if (database.hasOwnProperty(login)) {
                //verificar se a senha estiver correta
                if (database[login].senha === senha) {
                    resolv("Autenticação bem sucedida, Olá " +
                        database[login].usuario)
                } else {
                    reject("Senha incorreta: Por favor tente novamente")
                }
            } else {
                reject("Usuario não encontrado")
            }
        }, 2000)
    ))
}

//executar a função  logar
// no uso de promise é necessario usar o .then
logar(login, senha)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log("Erro de autenticação. " + error)
    })