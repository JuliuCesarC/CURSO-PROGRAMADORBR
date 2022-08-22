const express = require("express");
const app = express();
const PORT = 5000;

// A caracteristica do Middleware é ter acesso ao 'req, res' e a um parâmetro 'next'.
// app.get("/", (req, res)=>{
//     res.send("Hello World")})
// app.post("/", (req, res)=>{
//     res.send("Hello World")})
// Como o get e o post estão executando o mesmo trabalho, podemos pegar esse Middleware e colocar em uma função, passando essa função para os 2.

let consMetodo = (req, res, next) => {
    // Como esse Middleware não possui resposta, o programa fica travado nessa função, e não segue para o proximo Middleware.
    console.log(req.method);
    next();
    // Para isso utilizamos o 'next()', que fara o programa seguir após executar essa função.
    // Dentro de um Middleware é possivel executar varias coisas, e caso seja necessario parar o programa caso aconteça algum erro, podemos utilizar o 'next' também, só é preciso passar algum parametro para ele:
    // next("[erro] Não foi possivel executar o ....")
};
let consBody = (req, res, next) => {
    console.log(req.body);
    next();
};
let hello = (req, res) => {
    res.send("Hello World");
};

app.use(express.json());
// Com o express mais atual, não é necessario instalar o body-parser, pois ele ja é uma dependencia do express. E para esse novo método utilizamos o 'express.json()' e o 'express.urlencoded()', dessa forma podemos pegar as informações inviadas no body da requisição.
app.use(express.urlencoded({ extended: true }));
app.use("/", consMetodo, consBody);
// Podemos também utilizar o 'use' com um Middleware, dessa forma todo resquest, independente de qual tipo(get, post, put...) sempre passara por esse Middleware em questão.

app.get("/", /* consMetodo */ hello);
// É possivel passar varios Middleware como parametro. Mas como estamos utilizando o '.use' acima, não é necessario passar o 'consMetodo' aqui.
app.post("/", /* consMetodo */ hello);

app.listen(PORT, () => {
    console.log("Rodando na porta 5000");
});
