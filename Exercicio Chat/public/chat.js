const socket = io("http://localhost:5000");

socket.on("update_messages", (msgs) => {
    updateMessagesOnScreen(msgs);
});

function updateMessagesOnScreen(Messa) {
    const div_messages = document.getElementById("messages");

    let list_messages = "<ul>";
    Messa.forEach((content) => {
        list_messages += `<li>${content}</li>`;
    });
    list_messages += "</ul>";

    div_messages.innerHTML = list_messages;
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#enviar");
    form.addEventListener("submit", (e) => {
        // Por padrão o evento de 'submit' envia os dados diretamente para o backend atravez da URL, porém neste projeto precisamos que seja enviado atravez do socket.
        e.preventDefault();
        // O 'preventDefault' como sugere, serve para previnir um evento padrão de acontecer, caso ele seja passivel de cancelamento. O evento padrão que estamos cancelando é o de submit direto para o backend.

        const Content = document.forms["Enviar_Name"]["MSG_Name"].value;
        // O método '.forms' serve para pegarmos o conteudo de um formulario. O primeiro array é referente ao formulario que iremos selecionar, no caso apenas 1, e ele retorna um array com todos os inputs do formulario, então no segundo array selecionamos apenas oque utilizaremos.
        document.forms["Enviar_Name"]["MSG_Name"].value = "";
        socket.emit("new_message", { msg: Content });
        // Após
        console.log(Content);
    });
});
