const express = require("express");
const app = express();
const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: String,
    url: { type: String, require: true },
    click: { type: Number, default: 0 },
});
const Link = mongoose.model("Link", linkSchema);

mongoose.connect("mongodb://localhost/links");
let db = mongoose.connection;

db.on("error", () => {
    console.log("Houve um erro");
});
db.once("open", () => {
    console.log("Banco carregado");

    // Neste exercicio temos o intuito de ler os arquivos da coleção, e para isso precisamos garantir que o banco ja esta carregado, então executaremos o que for necessario dentro do listener 'open'.

    app.get("/:title", async (req, res) => {
        // Criamos uma rota para ler o documento quando o usuario fazer uma requisição.
        // Como abaixo estamos utilizando uma função assincrona 'await', então precisamos colocar o 'async' antes da arrow function.
        let title = req.params.title;
        // O 'params.title' ira pegar o parametro no final da URL da requisição.
        try {
            let doc = await Link.findOne({ title: title });
            // O método 'find' serve para buscar documentos no banco de dados, e recebe um objeto como parametro. Dentro do parametro, o primeiro 'title' é referente ao Schema, e o segundo é referente ao 'req.params.title', como  os 2 tem o mesmo nome e estão dentro de um objeto, poderiamos ter omitido um dos 'title' e passado apenas '{title}'. Retorna um array com todos os resultados que bateram com o parametro.
            // O 'findOne' como sugere, retorna apenas o primeiro objeto que bate com o parametro.
            // Para utilizar o 'find/findOne' é preciso primeiro informar em qual coleção estamos buscando, por isso utilizamos o 'Link.find'.
            res.redirect(doc.url);
            // Como o objetivo deste exercicio é redirecionar a pagina de acordo com a requisição, podemos utilizar o 'redirect' e passar a URL desejada como parametro.
        } catch (error) {
            console.log(error);
        }
    });
});

app.get("/", (req, res) => {
    res.send("Hello World");
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log("Servidor rodando na porta ", PORT);
});
