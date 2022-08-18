const http = require("http");
const url = require("url");
// O 'url' acima recebera um objeto contendo varias funções, uma dessas funções é o método 'Url' que nos informara alguns parametros da requisição feita atravez do URL.
const fs = require("fs");

http
  .createServer((requisicao, resposta) => {
    let path = url.parse(requisicao.url).pathname;
    // Como o 'url' recebe um obejeto, utilizamos o '.parse' do JSON para interpretar os dados. Passando a 'requisicao.url' junto com o '.pathname' temos o nome do caminho que foi requisitano na url.
    // Para o exemplo apresentado, estamos abrindo uma pagina html atravez de uma requisição no servidor Node com o 'http://localhost:3000/'.
    if (path == "" || path == "/") {
      path = "/index.html";
      // Caso não seja digitado nenhum caminho no Url da requisição, então atribuimos o caminho da pagina em questão dentro deste 'if'.
    }
    let fileName = "." + path;

    fs.readFile(fileName, (erro, data) => {
      if (erro) {
        resposta.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
        // Caso o caminho digitado na requisição não seja de nenhuma opção, então apresentamos o código 404 de pagina não encontrada.
        resposta.end("<h1>Página não encontrada</h1>");
      } else {
        resposta.writeHead(200, { "Content-Type": "text/html" });
        resposta.write(data);
        resposta.end();
      }
    });
  })
  .listen(3000, (erro) => {
    if (erro) {
      console.log(erro);
    } else {
      console.log("Servidor rodando na porta 3000.");
    }
  });
