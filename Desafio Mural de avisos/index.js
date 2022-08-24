const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const posts = require("./model/posts");

app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
});
app.post("/new", bodyParser.json(), (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);
    res.send("Post adicionado");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log("Servidor rodando na porta", PORT);
});
