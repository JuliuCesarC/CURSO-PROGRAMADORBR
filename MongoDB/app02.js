const express = require("express");
const app = express();
const mongoose = require("mongoose");

// O Mongoose trabalha como um ORM "object relational mapping" pois o banco de dados MongoDB é NoSQL. Então precisamos ter um "molde" do que vai ser o nosso documento no banco de dados. 
mongoose.connect("mongodb://localhost/links")









app.get("/", (req, res) => {
    res.send("Hello World");
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log("Servidor rodando na porta ", PORT);
});