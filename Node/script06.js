const http = require("http");
const url = require("url");
const fs = require("fs");

// O script06 é o mesmo do script05, porém tratando os dados da requisição. Existem formas muito melhores de tratar esses dados, mas este método tem mais função como educativo.
function tratandoArq(req, res, callback) {
  // A função 'tratandoArq' esta recebendo a função 'tratandoReq' como callback, dessa forma, caso a requisição de erro, ela ira chamar a função callback.
  let path = url.parse(req.url).pathname;
  let fileName = "." + path;

  fs.readFile(fileName, (erro, data) => {
    if (erro) {
      if (callback) {
        if (!callback(req, res)) {
          // Se após passar pela função 'tratandoReq' e nenhum tratamento de dados foi adequado, então ela retorna 'false', o que executa os 2 códigos abaixo.
          res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
          res.end("<h1>Página não encontrada</h1>");
        }
      }
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
}

function tratandoReq(req, res) {
  // Dentro dessa função podemos adicionar varias tipos de tratamento de dados, abaixo temos apenas 1 simples tipo de tratamento.
  let path = url.parse(req.url).pathname;

  let metodo = req.method;
  console.log(metodo)


  if (path == "/teste") {
    res.end("Teste");
    return true;
  }
  return false;
}

http
  .createServer((requisicao, resposta) => {
    tratandoArq(requisicao, resposta, tratandoReq);
  })
  .listen(3000, (erro) => {
    if (erro) {
      console.log(erro);
    } else {
      console.log("Servidor rodando na porta 3000.");
    }
  });
