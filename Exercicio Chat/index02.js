const express = require("express");
const path = require("path");
const socketio = require("socket.io");

const app = express();
const PORT = 5000;

app.use("/sala1", express.static(path.join(__dirname, "public")));
app.use("/sala2", express.static(path.join(__dirname, "public")));

const Server = app.listen(PORT, () => {
    console.log("Rodando ", PORT);
});

const messages = { sala1: [], sala2: [] };
const io = socketio(Server);

const grupo1 = io.of("/sala1").on("connection", (socket) => {
    // O '.of' permite criar um grupo onde somente os navegadores conectados nesse grupo seram atualizados com o '.on'.
    socket.emit("update_messages", messages.sala1);
    console.log("New connection.");

    socket.on("new_message", (data) => {
        messages.sala1.push(data);
        grupo1.emit("update_messages", messages.sala1);
        console.log(messages.grupo1);
    });
});
const grupo2 = io.of("/sala2").on("connection", (socket) => {
    // O '.of' permite criar um grupo onde somente os navegadores conectados nesse grupo seram atualizados com o '.on'.
    socket.emit("update_messages", messages.sala2);
    console.log("New connection.");

    socket.on("new_message", (data) => {
        messages.sala2.push(data);
        grupo2.emit("update_messages", messages.sala2);
        console.log(messages);
    });
});

// io.on("connection", (socket) => {
//     socket.emit("update_messages", messages);
//     console.log("New connection.");

//     socket.on("new_message", (data) => {
//         messages.push(data);
//         io.emit("update_messages", messages);
//         console.log(messages)
//     });
// });
