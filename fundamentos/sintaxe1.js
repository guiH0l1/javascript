/** 
 * Sintaxe básica da linguagem javaScript
 * @author Guilherme Holi
 */

console.clear()
// JS - Sentença e ; opcional
console.log("Hello, World!")

// concatenação unir variaveis, texto e variaveis 
let nome = "Guilherme"
console.log(`Nome: ${nome}`)
console.log("Nome: " + nome) //não recomendado

//arredondamento (casas decimais)
let media = 5.789
console.log(`Média: ${media.toFixed(1)}`)