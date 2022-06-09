function criaraluno(nome, n1, n2) {
    return{
        aluno: nome,
        nota1: n1,
        nota2: n2,
        media: calcmedia
    }
    
}
function calcmedia(){
    return (this.nota1 + this.nota2)/2
}

let turma = [
    criaraluno("igor", 7, 8.5),
    criaraluno("carlos", 6, 7.5),
    criaraluno("joaquim", 8, 5.5)
]

let aluno = turma[2]

console.log(aluno.aluno)
console.log(`Média: ${aluno.media()}`)