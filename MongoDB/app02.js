const express = require("express");
const app = express();
const mongoose = require("mongoose");

// O Mongoose trabalha como um ORM "object relational mapping" pois o banco de dados MongoDB é NoSQL. Então precisamos ter um "molde" do que vai ser o nosso documento no banco de dados, e, no mongoose esse "molde" é chamado de 'squema'.

const linkSchema = new mongoose.Schema({
    // A variavel 'linkSchema' recebe um 'new' pois é uma nova instancia do mongoose, e como parametro passamos um objeto que sera o "molde" do squema.
    title: {type:String, require:true},
    description: String,
    url: {type:String, require:true},
    click: {type:Number, default:0},
    // Em cada campo do objeto podemos definir apenas o tipo de informação que sera guardado como no 'description', ou se necessario podemos adicionar mais informações como o 'require':obrigatório, 'default':valor padrão.
});
// Após criar o schema, precisamos criar o 'model' que seria próximo da representação da coleção. O 'model' "aponta" para a coleção e indica que ali tem alguns documentos com um certo schema.
const Link = mongoose.model("Link", linkSchema);
// Geralmente é criado uma variavel 'Link' com L maiusculo para representar/referenciar a coleção.
let link = new Link({
    // E uma variavel 'link' com l minusculo para se referir ao documento.
    title: "youtube",
    description: "Link para a pagina do Youtube.",
    url: "https://www.youtube.com/",
});

link.save()
// O 'save' serve para salvar o documento na coleção.
    .then((doc) => {
        console.log(doc);
    })
    .catch((err) => {
        console.log(err);
    });

mongoose.connect("mongodb://localhost/links");

app.get("/", (req, res) => {
    res.send("Hello World");
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log("Servidor rodando na porta ", PORT);
});
