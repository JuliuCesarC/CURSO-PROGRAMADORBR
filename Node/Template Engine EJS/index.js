const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

let article = [
    {
        id: 0,
        title: "Template Engine EJS",
        author: "Jão",
    },
    {
        id: 1,
        title: "Template Engine EJS",
        author: "Lusca",
    },
    {
        id: 2,
        title: "Template Engine EJS",
        author: "Jenfiner",
    },
];
app.set("views", path.join(__dirname, "views"));
// O primeiro argumento 'views' é para indicar o locar dos arquivos 'views', e o segundo argumento é o caminho desses arquivos.
app.set("view engine", "ejs");
// Precisamos tambem indicar para o express/node qual é p template engine que estamos utilizando.

app.get("/", (req, res) => {
    res.render("user", {author: article});
});

app.listen(5000, () => {
    console.log("Servidor rodando na porta 5000");
});
