/**
 * conferir idade se esta apto a votar
 * @author Guilherme Holi
 */

const input = require("readline-sync")

let idade

console.clear()

idade = Number(input.question('Digite a tua idade: '))


if (idade < 16){
    console.log("Não vota")
} else if(idade > 17 && idade < 71){
    console.log("voto obrigatorio")
} else {
    console.log("Voto facultativo")
}
