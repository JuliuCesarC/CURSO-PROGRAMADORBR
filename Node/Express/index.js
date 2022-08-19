const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "client")));
// A cada requisição o '.use' tenta entregar alguma resposta. O mais basico é buscar por algum arquivo com o nome 'index.html' dentro da pasta 'client'.

app.get("/", (req, res) => {
    
    // res.set("Content-Typer", "text/plain");
    // O '.set' permite alterar qualquer informação no cabeçalho do 'writeHead'. Para alterar apenas o 'content-type' utilizamos o :
    res.type("txt");
    // Por padrão o content-type do express já vem como "text/html", então só alteramos se for necessario outro tipo de interpretação.
    // .type("html"): PADRÃO texto e html
    // .type("txt"): text/plain
    // .type("json"): application/json
    // .type("png"): image/png
    res.send("<h1>Hello World from GET</h1>");
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log("Running");
});
