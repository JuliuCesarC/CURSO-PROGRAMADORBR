import "./styles.css";
import Card from "../../components/Card";

import React from "react";
class Home extends React.Component {
    constructor(props) {
        super(props);

        // ESTADO
        this.state = {
            guestName: "",
            guestCard: [],
            Host: { name: "", avatar: "", id: "" },
        };
        this.addGuest = this.addGuest.bind(this);
        this.removeCard = this.removeCard.bind(this);
        this.editCard = this.editCard.bind(this);
    }

    // FUNÇÃO
    addGuest() {
        const newGuest = {
            name: this.state.guestName,
            time: this.getHour(),
            id: this.randomID(),
        };

        this.setState((prevState) => {
            let newArray = prevState.guestCard;
            // prevState.guestCard.map((cont)=>{newArray.push(cont)})
            if (newGuest.name == "") {
                return;
            }
            newArray.push(newGuest);
            return { guestCard: newArray };
        });
    }
    removeCard(id) {
        let removeGuestCard = this.state.guestCard.filter(
            (cards) => cards.id != id
        );
        this.setState(() => {
            return { guestCard: removeGuestCard };
        });
    }
    editCard(name, id) {
        let newName = this.state.guestCard;
        let nIndex = newName.findIndex((element) => element.id == id);
        newName[nIndex].name = name;
        this.setState(() => {
            return { guestCard: newName };
        });
    }
    getHour() {
        return new Date().toLocaleTimeString("pt-br", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }
    randomID() {
        return Math.random().toString(36).substring(2, 9);
    }

    // CICLOS DE VIDA
    componentDidMount() {
        fetch("https://api.github.com/users/JuliuCesarC")
            .then((response) => response.json())
            .then((data) => {
                this.setState(() => {
                    return {
                        Host: { name: data.name, avatar: data.avatar_url },
                    };
                });
            });
    }

    // RENDERIZAÇÃO
    render() {
        return (
            <div className="container">
                <header>
                    <h1>Lista de Presença</h1>
                    <div>
                        <strong>{this.state.Host.name}</strong>
                        <img
                            src={this.state.Host.avatar}
                            alt="Foto de perfil"
                        />
                    </div>
                </header>
                <input
                    type="text"
                    placeholder="Digite o nome..."
                    onChange={(e) => {
                        this.setState(() => {
                            return { guestName: e.target.value };
                        });
                    }}
                />
                <button type="button" onClick={this.addGuest}>
                    Adicionar
                </button>

                {this.state.guestCard.map((guest, index) => (
                    <Card
                        key={index}
                        id={guest.id}
                        name={guest.name}
                        time={guest.time}
                        del={"img/icone-edit-web.png"}
                        onDeletedCard={this.removeCard}
                        edit={"img/icone-delete-web.png"}
                        onEditCard={this.editCard}
                    />
                ))}
            </div>
        );
    }
}

export default Home;
