function criaObj(nome, idade){
    return {nome, idade}}

let teste = [
    criaObj("Carlo", 22),
    criaObj("Jhenfiner", 24),
    criaObj("Lusca", 23),
    criaObj("Jão", 23)
]
console.log(teste)
    // O JSON é muito utilizado para respostas vindo de uma API e Servidores, pois pode ser interpretado por muitos tipos de linguagens de programação, mas utilizando o JavaScript como base.

    // O JSON.stringfy transforma a variavel que foi passada para ele em uma string.
let transformado = JSON.stringify(teste);
console.log(transformado)

    // O JSON.parse transforma um Json que esta em formato string em valores novamente.
let destransformado = JSON.parse(transformado)
console.log(destransformado)