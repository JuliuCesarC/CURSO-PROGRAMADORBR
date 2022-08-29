const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Para trabalhar com o banco de dados, primeiro precisamos se conectar a ele. Para isso utilizamos o 'connect' com a URL do servidor. Nesta URL ja selecionamos em que banco iremos conectar, no exemplo abaixo é no banco 'links'. No momento o banco de dados 'links' ainda não foi criado, mas isso é permitido pelo Mongo, pois a partir do momento que for inserido algum dado nesse banco, ele sera criado e aparecera na lista de banco de dados. 
//                  1
// mongoose.connect("mongodb://localhost/links", (error, db) => {
//     // Uma das formas de ter acesso ao banco de dados é atravez de um callback, como feito acima. 
//     console.log(error);
//     console.log(db);
// });
//                  2
// mongoose.connect("mongodb://localhost/links").then(db=>{
//     // Outra forma de ter acesso é com o 'then', pois o mongoose traz muitas funcionalidades semelhantes a uma promise.
//     console.log(db)
// }).catch(err=>{
//     console.log(err)
// })
//                  3
mongoose.connect("mongodb://localhost/links")

let db = mongoose.connection
// Uma terceira maneira é atribuindo a conecção a uma variavel, PORÉM, como o 'mongoose.connect' é assíncrono, pode ser que a variavel seja criada antes da conecção acontecer. Para resolver esse problema podemos utilizar alguns Listeners.
db.on("error", ()=>{console.log("Houve um erro!")})
// Quando acontecer algum erro este listner sera disparado.
db.once("open", ()=>{console.log(db)})
// O 'db.once' sera executado apenas uma vez, e passando o parametro 'open' ele ira disparar quando o banco de dados abrir. 


app.get("/", (req, res) => {
    res.send("Hello World");
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log("Servidor rodando na porta ", PORT);
});
