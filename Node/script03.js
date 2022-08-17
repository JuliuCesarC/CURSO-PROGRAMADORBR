let fs = require('fs')

let args = process.argv.slice(2)

let nomeArq = args[0];

fs.readFile(nomeArq, 'utf-8', (erro, data)=>{
    if(erro)throw erro;
    fs.writeFile(nomeArq+'_MAIUSCULAS', data.toUpperCase(), (erro2)=>{
        if(erro2)throw erro2;
        console.log("Arquivo alterado com sucesso.")
    })
})