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
    }

    // FUNÇÃO
    addGuest() {
        const newGuest = {
            name: this.state.guestName,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: "2-digit",
                minute: "2-digit",
            }),
            id: this.randomID()
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
    randomID() {
        return Math.random().toString(36).substring(2, 9);
    }
    removeCard(id){
        let newGuestCard = this.state.guestCard.filter(cards=>cards.id!=id)
        this.setState(()=>{return {guestCard: newGuestCard}})
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
                        del={"imgs/icone-edit-web.png"}
                        onDeletedCard={this.removeCard}
                        edit={"imgs/icone-delete-web.png"}

                    />
                ))}
            </div>
        );
    }
}

export default Home;
