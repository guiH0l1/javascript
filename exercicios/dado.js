/**
 * exemplo de uso do metodo para gerar numeros aleatorio
 * jogo do dado
 * @author Guilherme Holi
 */

const input = require('readline-sync')

let face

console.clear()
console.log("Jogo do dado")
input.question("pressioone a tecla [enter] para jogar o dado")

// Sorteio da face do dado
// Math classe matematica
// floor() conversão para numeros inteiros
// random() * (gerador de numeros aleatorios)


face = Math.floor(Math.random() * 6 + 1) // sorteia os numeros de 0 a 6
console.log(`Face do dado: ${face}`)


