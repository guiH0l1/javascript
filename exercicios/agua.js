/**
 * consumo de agua
 * @author Guilherme Holi
 */

const input = require("readline-sync")

let peso, consumo

console.clear()

console.log("Vericar maioridade")

peso = Number(input.question("Digite a sua peso: "))

consumo = peso * 0.035

console.log(`Seu consumo deve ser de ${consumo}L de agua por dia`)