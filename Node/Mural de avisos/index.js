const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5000;

let posts = [
    {
        id: "qualquer",
        title: "Teste do Mural",
        description: "Descrição HardCode",
    },
];

app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts));
});
app.post("/new", bodyParser.json(), (req, res) => {
    let id = generateID();
    let title = req.body.title;
    let description = req.body.description;

    posts.push({ id, title, description });
    res.send("Post adicionado")
});

function generateID() {
    // Maneira provisoria para gerar um ID.
    return Math.random().toString(36).substring(2, 9);
    // O math.random por padrão só gera numeros aleatorios, porém com o '.toString()' passando o parametro '36', o resultado é uma combinação de letras e numeros.
    // O 'substring' serve para selecionar uma parte especifica da string, passamos o parâmetro 2 para que seja selecionado a partir da terceira letra.
}

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
