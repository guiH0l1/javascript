/**Ficha de academia
 * @author Guilherme Holi
 * */


// variaveis
let nome, peso, idade, altura, vip, fcm, imc


console.clear()

// entrada de dados
nome = "Guilherme Holi"
peso = 90
idade = 21
altura = 1.55
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

if (imc <= 25 && imc >= 15){
    console.log("Peso normal")
} else if (imc > 25 && imc <= 30) {
    console.log(`Acima do peso`)
}else if (imc > 30 && imc <= 35) {
    console.log(`Obesidade grau 1`)
} else if (imc > 35 && imc <= 40) {
    console.log(`Obesidade grau 2`)
} else if (imc > 40) {
    console.log(`Obesidade grau 3`)
} else {
    console.log(`Abaixo do peso`)
}