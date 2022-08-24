const express = require("express");
const app = express();
const path = require("path")
const apiRoute = require('./routes/api')

app.use('/api', apiRoute)
app.use(express.static(path.join(__dirname, "public")))
// O 'express.static' é utilizado para entregar arquivos estaticos, como imagens, html, javascript, etc.
// O 'path.join' serve para unir varias strings em uma string normalizada para diretorio. EX: 'path.join("pasta1", "pasta2", "Teste")'. Resultado: '/pasta1/pasta2/Teste'
// Já o '__dirname' é utilizado para pegar o caminho atual do arquivo em que ele é utilizado.Resultado: 'C:\User\Usuario\Desktop\.....'.



const PORT = 5000;
app.listen(PORT, () => {
    console.log("Servidor rodando na porta", PORT);
});
