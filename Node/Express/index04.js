const express = require("express");
const app = express();
const PORT = 5000;
const aluno = require("./routes/alunos");
// Dentro da pasta 'routes' foi criado um arquivo com todas as rotas que vamos utilizar aqui. Para ter acesso a essas rotas, estamos importando esse modulo dentro de 'aluno'.
app.use(express.urlencoded({ extended: true }));

app.use("/", aluno);
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log("Rodando na porta 5000");
});
