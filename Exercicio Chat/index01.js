const express = require("express");
const path = require("path");
const socketio = require("socket.io");

const app = express();
const PORT = 5000;

app.use("/", express.static(path.join(__dirname, "public")));

const Server = app.listen(PORT, () => {
    console.log("Rodando ", PORT);
});

const messages = [];
const io = socketio(Server);

io.on("connection", (socket) => {
    socket.emit("update_messages", messages);
    console.log("New connection.");
    // Diferente do comando abaixo onde utilizamos o 'io.emit' para atualizar a todos com novas mensagens, aqui utilizamos o 'socket.emit' para atualizar apenas o próprio usuario das mensagens anteriores.

    socket.on("new_message", (data) => {
        messages.push(data);
        io.emit("update_messages", messages);
        console.log(messages);
    });
});
