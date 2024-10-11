/**
 * Verificar idade
 * @author Guilherme Holi
 */

const input = require("readline-sync")

let idade

console.clear()

console.log("Vericar maioridade")

idade = Number(input.question("Digite a sua idade: "))
console.log(`idade: ${idade}`)

if (idade >= 18){
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}