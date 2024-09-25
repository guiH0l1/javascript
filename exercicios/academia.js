/**Ficha de academia
 * @author Guilherme Holi
 * */


// variaveis
let nome
let peso
let idade
let altura
let vip
let fcm
let imc

console.clear()

// entrada de dados
nome = "Guilherme Holi"
peso = 64
idade = 21
altura = 1.61
vip = true


//processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)

//saída
console.log("Ficha do aluno")
console.log("____________________________")
console.log(`Nome: ${nome}`)
console.log(`Peso: ${peso}`)
console.log(`Idade: ${idade}`)
console.log(`Altura: ${altura}`)
console.log(`Vip ${vip}`)
console.log(`FCM ${fcm}`)
console.log(`IMC ${imc.toFixed(2)}`)

if (imc < 25 | imc > 15){
    console.log("Peso normal")
} else if (imc > 30) {
    console.log(`Acima do peso`)
} else {
    console.log(`Abaixo do peso`)
}