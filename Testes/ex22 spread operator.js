var notasPrimeiroBi = [8,9,5.5,6.5]
var notasSegundoBi = [7,7.5,8,7]

var todasNotas = [...notasPrimeiroBi, ...notasSegundoBi]
    // O spread operator "..." é um pouco complexo, porem podemos utilizalo para clonar um array ou objeto, para juntar 2 arrays como o exemplo acima, adicionar itens ao array/objeto. 
console.log(todasNotas)

var objSemFunction = {
    nome: "Jão",
    idade: 25
}

    // O exemplo abaixo adiciona uma função a um objeto ja criado.
let objComFunction = {...objSemFunction, funcao: ()=>{let x= objSemFunction.idade*2; console.log(x)}}

console.log(objComFunction)  
objComFunction.funcao();