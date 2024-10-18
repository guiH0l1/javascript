/**Ficha de academia
 * @author Guilherme Holi
 * */



console.clear()

const input = require('readline-sync')
const colors = require('colors')
// variaveis
let nome, peso, idade, altura, fcm, imc, consumo

console.log(" __ __    ___   ____  _     ______  __ __        __   ____  _        __  __ __  _       ____  ______   ___   ____ ") 
console.log("|  |  |  /  _] /    || |   |      ||  |  |      /  ] /    || |      /  ]|  |  || |     /    ||      | /   \\ |    \\ ")
console.log("|  |  | /  [_ |  o  || |   |      ||  |  |     /  / |  o  || |     /  / |  |  || |    |  o  ||      ||     ||  D  ) ")
console.log("|  _  ||    _]|     || |___|_|  |_||  _  |    /  /  |     || |___ /  /  |  |  || |___ |     ||_|  |_||  O  ||    / ")
console.log("|  |  ||   [_ |  _  ||     | |  |  |  |  |   /   \\_ |  _  ||     /   \\_ |  :  ||     ||  _  |  |  |  |     ||    \\ ")
console.log("|  |  ||     ||  |  ||     | |  |  |  |  |   \\     ||  |  ||     \\     ||     ||     ||  |  |  |  |  |     ||  .  \\ ")
console.log("|__|__||_____||__|__||_____| |__|  |__|__|    \\____||__|__||_____|\\____| \\__,_||_____||__|__|  |__|   \\___/ |__|\\_|")
                                                                                                                                                                                                                                   
console.log("")
// entrada de dados
nome = input.question("Digite o seu nome: ")
idade = Number(input.question("Digite o sua idade: "))
peso = Number(input.question("Digite o sua peso: "))
altura = Number(input.question("Digite a sua altura (em metros): "))

//processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)
consumo = peso * 0.035

//saída

console.log("Ficha do aluno")
console.log("____________________________")
console.log(`Nome: ${nome}`)
console.log(`Peso: ${peso}`)
console.log(`Idade: ${idade}`)
console.log(`Altura: ${altura}`)
console.log(`FCM ${fcm}`)
console.log(`IMC ${imc.toFixed(2)}`)

if (imc < 18.5){
    console.log("Abaixo do peso".cyan)
} else if (imc < 25) {
    console.log(`Peso normal`.green)
}else if (imc < 30) {
    console.log(`Levemente acima do peso`.yellow)
} else if (imc < 35) {
    console.log(`Obesidade grau 1`.magenta)
} else if (imc < 40) {
    console.log(`Obesidade grau 2`.red)
} else {
    console.log(`Obesidade grau 3`.bgRed)
}

console.log(`Seu consumo de agua deve ser de ${consumo.toFixed(2)}L de agua por dia`)