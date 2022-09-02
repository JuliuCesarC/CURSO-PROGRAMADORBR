function na(nome, idade){return {nome, idade}}
let alunos=[na("jão",45),na("Marci",25),na("Rosdrigo",42),na("Lusca",29),na("Jhenfiner",33)]


// Recriando o metodo Filter
function menosde30(al){return al.idade<30}
function filtra(cll){
    let filtrado = [];
    for(let aluno of alunos){
        if(cll(aluno)){
        filtrado.push(aluno)
    }}return filtrado;
} //Filtrando apenas os alunos com menos de 30 anos.
console.log(filtra(menosde30))
// __________________________________________________

// Recriando o metodo Map
function mudaDisposicao(al){return al.nome +" tem "+ al.idade +" anos.";}
function mapeia(cll){
    let mapeado = [];
    for(let aluno of alunos){
        mapeado.push(cll(aluno));
    }return mapeado;
} //Mudando a disposição da informação do objeto.
console.log(mapeia(mudaDisposicao))
// __________________________________________________

// Recriando o metodo Reduce
function reduce(){
    for(let al of alunos){
        t2 += al.nome}
    return t2;
}
var t2 = "";
console.log(reduce())