/**
 * Estudo das funções 
 * @author Guilherme Holi
 */

console.clear()

hello()
// função literal
function hello(){
    console.log("Hello Function")
}
console.log(typeof(hello))

//função atribuida
//funções atriuidas precisam ser declaradas no inicio do código antes da chamada
const hello2 = function() {
    console.log("Hello2 Function")
}
console.log(typeof(hello2))
hello2()

//arrow function (função simplificada de criar uma função atribuida)
const hello3 = () => {
    console.log("Hello3 Function")
}
hello3()
console.log(typeof(hello3))

//arrow function mais simplificada  (neste caso só é possivel executar uma linha de codigo)
const hello4 = _ => console.log("Hello Function4")
hello4()
console.log(typeof(hello4))