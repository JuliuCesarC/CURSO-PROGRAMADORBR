const http = require('http')

http.createServer((request, response)=>{
    // O 'createServer' serve para dar uma resposta para uma requisição no servidor. A resposta depende de como vamos trabalhar dentro do 'createServer'.
    // Neste exemplo não estamos trabalhando com a requisição, apenas com a resposta. Ou seja, qualquer request tera a mesma resposta.

    response.writeHead(200, {'Content-type': 'text/html'})
    // O numero 200 representa o 'HTTP status code', cada código representa algo que aconteceu no servidor, o mais conhecido é o '404 Not Found'.
    // No 'writeHead' é definido como o navegador ira interpretar aquele dado.
    // text/plain: texto puro.
    // text/html: texto e tags html.
    // application/json: interpreta o objeto json, porém ele precisa ser enviado como string.
    response.end("<h1>Hello World</h1>")
    // O 'end' é quem envia a resposta.
}).listen(3000, (erro)=>{
    if(erro){console.log(erro)
    }else{console.log("Servidor rodando na porta 3000.")}
})

http.createServer((request, response)=>{
    response.writeHead(200, {'Content-type': 'application/json'})
    response.end(JSON.stringify({texto: "<h1>Hello World</h1>"}))
}).listen(4000, (erro)=>{
    if(erro){console.log(erro)
    }else{console.log("Servidor rodando na porta 4000.")}
})