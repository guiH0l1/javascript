/**
 * input de dados via terminal
 * Uso do pacote read-line-sync
 * @author Guilherme Holi
 */

//importar o pacote
const input = require('readline-sync') 

let nome

console.clear()

nome = input.question("Digite o seu nome: ")
console.log(`Hello ${nome}`)