const express = require("express");
const path = require("path");
const socketIO = require("socket.io");
// O 'socket.io' habilita uma comunicação bilateral entre o servidor e o cliente, esta comunicação é baseada em eventos. Isso nos permite enviar novos dados para o cliente sem que ele precise fazer uma nova requisição.

const PORT = 5000;
const app = express();

app.use("/", express.static(path.join(__dirname, "public")));

const server = app.listen(PORT, () => {
    console.log("Servidor rodando na porta ", PORT);
    // Como o 'app.listen' além de outras funcionalidades também retorna um servidor, que podemos utilizar no socket.io.
});
// Abaixo temos outra maneira de criar um servidor local, mas como o 'app.listen' acaba sendo mais simples, então utilizaremos ele.
// const http = require("http");
// const server = http.Server(app);
// server.listen(PORT, () => {
//     console.log("Servidor rodando na porta ", PORT);
// });

// IO vem de imput e output, ele fica olhando se alguma coisa esta chegando e envia uma resposta caso necessario.
const io = socketIO(server);
// O 'server' é quem esta gerenciando as requisições http.

//
io.on("connection", (socket) => {
    // O 'socket' é exatamente a conexão entre o frontend e o backend, cada navegador que esta se conectando com o backend é um novo socket. Em suma o socket é uma representação do navegador.
    console.log("Nova conexão.");
    const random = (Math.random() * 100).toFixed(1);

    socket.emit("hello", { msg: "Bem Vindo." });
    // O método 'emit' permite que seja enviado dados para o frotend. Utilizando o 'socket.emit' enviamos apenas para uma aba do navegador, a aba que efetuou a conexão. Porém precisamos configurar um listener do lado do cliente para receber esses dados.

    // Com o 'io.emit' enviamos uma mensagem para todas as abas conectadas.
    // io.emit("hello", { msg: `Bem Vindo! ${random}` });

    // Com o 'socket.broadcast.emit' enviamos uma mensagem para todas as abas conectadas menos para a aba que fez a conexão.
    socket.broadcast.emit("hello", {
        msg: `Chegou um novo usuario: ${random}`,
    });

    socket.on("client_response", (data) => {
        // Estamos enviando uma resposta do lado do cliente no momento que ele recebe a mensagem do 'emit' acima.
        console.log(data.msg);
    });
});
