const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((requisicao, resposta)=>{

    let path = url.parse(requisicao.url).pathname;
    if(path == '' || path == '/'){
        path = "/index.html"
    }
    let fileName = "."+path;
   
    fs.readFile(fileName, (erro, data)=>{
        if(erro){
        resposta.writeHead(404, {'Content-Type':'text/html;charset=utf-8'})
        resposta.end('<h1>Página não encontrada</h1>')
    }else{
        resposta.writeHead(200, {'Content-Type':'text/html'})
        resposta.write(data)
        resposta.end()
    }})

}).listen(3000, (erro)=>{
    if(erro){console.log(erro)
    }else{console.log("Servidor rodando na porta 3000.")}
})