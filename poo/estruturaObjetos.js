/**
 * Estrutura de dados - objetos
 * @author Guilherme Holi
 */

console.clear()

const funcionario1 = {} //variavel tipo objeto
console.log(typeof (funcionario1))
// Adicionar dados a estrutura
funcionario1.nome = "Guilherme"
funcionario1.cargo = "Estagiario"
funcionario1.email = "teste@gmail.com"
funcionario1.salario = 18000
funcionario1.insta = "@guilherme.oliveira"
//listar os dados da estrutura 
console.log(funcionario1)
console.log(funcionario1.cargo)
//modificar os dados da estrutura
funcionario1.nome = "Guilherme Holi"
console.log(funcionario1)
//Excluir dados da estrutura
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: "Bruce Wayne",
    cargo: "CEO",
    email: "Batman@gmail.com",
    salario: 400000
}

console.log(funcionario2)

const endereco1 = {
    logradouro: "Bat Caverna",
    cidade: "Gotham City",
    estado: "Nova Jersey"
}

console.log(endereco1)

//...spreed operator (união de estruturas de dados)
const funcionario3 = {
    nome: "Alfred Pennywort",
    cargo: "Mordomo",
    email: "Alfred@gmail.com",
    salario: 20000,
    ...endereco1
}

console.log(funcionario3)


const funcionario4 = {
    nome: "Dick Grayson",
    cargo: "Acrobata",
    email: "robin@gmail.com",
    salario: 2000,
    ...endereco1
}

console.log(funcionario4)

const funcionario5 = {
    nome: "Tony Stark",
    cargo: "Engenheiro",
    email: "homemdeferro@gmail.com",
    salario: 375000,
    armadura: {
        versao: "Mark 11",
        ano: 2010,
        reator: "Ark 01"
    },
    suitup: () => {
        console.log("⭐")
    }

}

console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.armadura.versao)
funcionario5.suitup() // executar a função interna da estrutura