function novoA(nome, idade){return {nome, idade}}
let alunos = [
    novoA("jão", 45),
    novoA("Marci", 25),
    novoA("Lusca", 29),
    novoA("Rosdrigo", 42),
    novoA("Jhenfiner", 33)]

// Muito parecido com o "filter" o Map cria um novo array baseado em outro array, porem diferente do filter que apenas mantem ou retira algum item de acordo com o filtro, o map pode modificar e tratar esses itens, como vemos abaixo, onde o resultado é as mesmas informações do array original, porem em uma disposição diferente.

// let mapeia = alunos.map((aluno)=>{
//     return aluno.nome + " tem " + aluno.idade + " anos";
// })
// console.log(mapeia)

    // Porém como vemos abaixo, podemos cometer o erro de referenciar um novo array pelo array original, dessa forma ao modificar o suposto novo array, estamos alterando o array original. 
let novosalunos = alunos.map((alunoCallback)=>{
    let novoAluno = alunoCallback
    novoAluno.idade += 5; 
    return novoAluno
})
console.log(novosalunos)

    // Para corrigir o problema acima e realmente fazermos uma copia/clone do array original podemos utilizar para arrays:
// let turmaA = ["Jão", "Lusca", "jhenfiner"];
// let turmaAcopia = turmaA.slice();
// ao utilizar o slice() sem passar nenhuma parametro para ele, acaba trasendo não uma parte, mas o sim array inteiro. Pois o slice tem como função cortar o array e tenha só uma parte dele
    // E para objetos:
// let turmaA = {nome: 'Jão', idade: 45}
// let turmaAcopia = Object.assign({}, turmaA);
// O assign como sujere atribui um objeto'turmaA' a um target'{}', como o nosso target foi um objeto vazio "{ }", o resultado foi uma copia do objeto turmaA

// E temos um terçeira opção que funciona para os 2
// let turmaAcopia = [...turmaA];
// let turmaAcopia = {...turmaA};
