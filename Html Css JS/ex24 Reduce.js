function criaAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    criaAluno("Jão", 23),
    criaAluno("Maria", 22),
    criaAluno("Predo", 20),
    criaAluno("Jhenfiner", 24)
]

    // O reduce ira reduzir todas as entradas de um array em uma unica entrada, o resultado dessa unica entrada depende de como sera tratado essas entradas.
function idadeMedia(idade, aluno){
    return idade + aluno.idade;
}
// O exemplo abaixo faz uma somatoria de todas as idades da 'turma'.
console.log(alunos.reduce(idadeMedia, 0))
console.log(alunos)

// Já a função abaixo utiliza um arrow function para juntar todos os nomes em uma unica string
console.log(alunos.reduce((nometotal, aluno)=>{return nometotal + aluno.nome},""))