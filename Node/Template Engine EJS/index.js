const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

let users = [
    {
        id: 0,
        name: "Jão",
        phone:"(2324)2343242"
    },
    {
        id: 1,
        name: "Jenfiner",
        phone:"(2324)8757685678"
    },
    {
        id: 2,
        name: "Lusca",
        phone:"(2324)45674567"
    }
]

app.set("views", path.join(__dirname, 'views'))
// O primeiro argumento 'views' é para indicar o locar dos arquivos 'views', e o segundo argumento é o caminho desses arquivos.
app.set("view engine", "ejs")
// Precisamos tambem indicar para o express/node qual é p template engine que estamos utilizando.
app.get("/", (req, res)=>{
    res.render('user', {users:users})
})
app.get("/about.ejs", (req, res)=>{
    res.render('about')
})

app.listen(5000, ()=>{
    console.log("Servidor rodando na porta 5000")
})