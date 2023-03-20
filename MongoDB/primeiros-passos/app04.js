const express = require("express");
const app = express();
const mongoose = require("mongoose");
const linkRouter = require("./routes/linkRouter");
const path = require("path");

mongoose.connect("mongodb://localhost/links");
let db = mongoose.connection;

db.on("error", () => {
    console.log("Houve um erro");
});
db.once("open", () => {
    console.log("Banco carregado");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public/templates"));

app.use(express.static(path.join(__dirname, "/public")));
app.use("/", linkRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log("Servidor rodando na porta ", PORT);
});
