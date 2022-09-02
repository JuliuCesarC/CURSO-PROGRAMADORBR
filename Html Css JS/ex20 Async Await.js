let alunos = ["jão", "Luncida", "Predo", "Lusca"];

function adicionaAluno(al){
    let proms = new Promise(function(resolve, reject){
        setTimeout(()=>{
            alunos.push(al);
            let error = false;
            if(!error){
                resolve();
            }else{
                reject({msg:"deu problema"})
            }
        }, 1000)
    })
    return proms;
}
function cataloga(){
    console.log(alunos)
}

async function exec(){
    cataloga();
    await adicionaAluno("Marcoz")
    cataloga();
}
exec()