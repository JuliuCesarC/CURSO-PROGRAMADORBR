function na(nome, idade){
    return {nome, idade}
}

let alunos = [
    na("jão", 45),
    na("Marci", 25),
    na("Lusca", 29),
    na("Rosdrigo", 42),
    na("Jhenfiner", 33),
]

let alm30 = alunos.filter((aluno)=>{return aluno.idade>30})
// Todo array possui a propriedade 'filter', ele recebe um callback como parametro e retorna um novo array com os itens filtrados. Caso a função retorne true, o item permanesse no array, caso de false, ele é retirado. Não interfere no array original 
console.log(alm30)

