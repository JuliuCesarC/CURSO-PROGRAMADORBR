let alunos = ['jão', 'Luncida', 'Predo', 'Lusca'];


function adicionaAluno(al, cll){
    setTimeout(()=> {
    alunos.push(al);
    cll()
    }, 1000)
}
/*O setTimeout esta simulando um atraso no servidor, assim tornando uma função assincrona.*/
function cataloga(){
    console.log(alunos)
}

adicionaAluno('Marco', cataloga)
/* O callBack é feito quando se passa uma função por exemplo a 'cataloga' como argumento de outra função, no caso a 'adicionaAluno'. Como a função é assincrona, se executar as 2 funções separadas o programa ira mostrar o array 'alunos' e depois de um tempo adicionar o aluno 'Marco', que não é o planejado, por isso utilizar o CallBack */