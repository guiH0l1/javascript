/**
 * Fundamentos da POO 
 * Encapsulamento (segurança)
 * @author Guilherme Holi
 */

console.clear()


class User {
    //atributos
    constructor(login, senha) {
        this.login = login
        //encapsulamento(O _ "underline" enjaula a variavel)
        let _senha = senha
        this.getSenha = () => _senha //leitura
        this.setSenha = (novaSenha) => _senha = novaSenha //escrita
    }
    //metodo
    logar() {
        console.log("______________________________")
        console.log(`Usuario: ${this.login}`)
        console.log(`Senha: ${this.getSenha()}`)
        if (this.login === "admin" && this.getSenha() === '123@senac') {
            console.log("Usuario autenticado!")
        } else {
            console.log("Usuario ou senha inválido!")
        }
    }
}

/*** Sistema */
// criando um novo objeto
const user1 = new User("admin", "1234")
user1.logar()
user1.setSenha('123@senac')
user1.logar()