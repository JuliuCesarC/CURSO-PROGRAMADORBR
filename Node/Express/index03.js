const express = require("express");
const app = express();
const PORT = 5000;
app.use(express.urlencoded({ extended: true }));

let alunos = [
    { id: 0, nome: "Jão" },
    { id: 1, nome: "NataN" },
    { id: 2, nome: "Jenfiner" },
    { id: 3, nome: "Lusca" },
];

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/Alunos", (req, res) => {
    res.json(JSON.stringify(alunos));
});

app.get("/aluno", (req, res, next) => {
    console.log(req.body);
    let aluno = alunos[req.body.id];
    // Com o body-parse dentro do express, podemos pegar informações do body da requisição.
    // Url utilizado na requisição: http://localhost:5000/aluno
    res.json(aluno);
    // Neste exemplo, é enviado o id do aluno na requisição atravez de um formulario, então é buscado dentro do array alunos, e retornado o aluno selecionado.
    next();
});
app.get("/aluno", (req, res) => {
    let alunoQuery = alunos[req.query.id];
    console.log("-----");
    console.log(alunoQuery);
    console.log("-----");
    res.json(alunoQuery);
});
app.get("/aluno/:id", (req, res) => {
    // Podemos tambem criar um rota especifica para enviar uma informação na requisição atravez do URL.
    // Url utilizado na requisição: http://localhost:5000/aluno/1
    console.log(req.params.id);
    let aluno = alunos[req.params.id];
    res.json(aluno);
    // E para selecionar o aluno com informações do url, é utilizado o 'params.'.
});

app.listen(PORT, () => {
    console.log("Rodando na porta 5000");
});
