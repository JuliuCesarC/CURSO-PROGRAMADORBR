let fs = require('fs')
    // O 'fs' é um modulo do Node que possui varias funcionalidades.
fs.writeFile('testeFS.txt', 'Hello World', (erro)=>{
    // O 'writeFile' serve para gravar dados em um arquivo especifico. Caso o arquivo já exista, o arquivo será substituido pelo novo.
    if(erro){throw erro}
    console.log('Arquivo criado.')
})

fs.appendFile('testeFS.txt', ' - Ola Mundo', (erro)=>{
    // O 'appendFile' adiciona um informação a um arquivo especifico, os novos dados seram concatenados com os dados já existentes. Caso o arquivo não exista, ele ira criar o arquivo.
    if(erro){throw erro}
    console.log('Arquivo atualizado.')
})

// fs.unlink('testeFS.txt', (erro)=>{
    // O 'unlink' serve para apagar um arquivo.
//     if(erro){throw erro};
//     console.log('Arquivo apagado.')
// })


fs.rename('testeFS.txt', 'teste01.txt', (erro)=>{
    // O 'rename' serve para renomear um arquivo.
    if(erro){throw erro}
    console.log('Arquivo renomeado.')
})

fs.readFile('teste01.txt', 'utf-8', function (erro, data){
    // O 'readFile' serve para ler um arquivo. É preciso passar o formato que ele ira mostrar os dados, por exemplo o 'utf-8'.
    if(erro){throw erro}
    console.log(data)
})