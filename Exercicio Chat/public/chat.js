const room = window.location.pathname.replace(/\//g, '')
console.log(room)
const socket = io(`http://localhost:5000/${room}`);
let User = null;

socket.on("update_messages", (msgs) => {
    updateMessagesOnScreen(msgs);
});

function updateMessagesOnScreen(Messa) {
    const div_messages = document.getElementById("messages");
    let color = "";
    let list_messages = '<ul class="list-group list-group-flush rounded">';
    Messa.forEach((content) => {
        color = "#27abe4";
        if (content.user == localStorage.getItem("Usuario")) {
            color = "#0dbb69";
        }
        list_messages += `<li class="list-group-item text-white fw-bold" style="background-color: rgba(0, 0, 0, 0.6);"><span style="color: ${color};">${content.user}</span>: ${content.msg}</li>`;
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

        if (!localStorage.getItem("Usuario")) {
            alert("É preciso definir um usuario!");
            return;
        }

        const Content = document.forms["Enviar_Name"]["MSG_Name"].value;
        // O método '.forms' serve para pegarmos o conteudo de um formulario. O primeiro array é referente ao formulario que iremos selecionar, no caso apenas 1, e ele retorna um array com todos os inputs do formulario, então no segundo array selecionamos apenas oque utilizaremos.
        document.forms["Enviar_Name"]["MSG_Name"].value = "";
        socket.emit("new_message", {
            user: localStorage.getItem("Usuario"),
            msg: Content,
        });
        // Após selecionarmos o conteudo do 'input', enviamos a mensagem para todos os navegadores conectador no servidor. Utilizamos o 'socket.emit' para que o proprio usuario veja sua mensagem.
        console.log(Content);
    });

    const userForm = document.querySelector("#user_form");
    const ModalUser = document.querySelector("#Usuario");
    userForm.addEventListener("submit", (e) => {
        e.preventDefault();
        User = document.forms["user_form_name"]["user_name"].value;
        console.log(User);
        userForm.parentNode.removeChild(userForm);
        ModalUser.classList.add("hidden");
        localStorage.setItem("Usuario", User);
        // O 'localStorage.setItem' salva algum dado no navegador do usuario, no nosso caso, estamos salvando o nome do usuario.
    });
});
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("Usuario")) {
        document.querySelector("#Usuario").classList.add("hidden");
    }
});
