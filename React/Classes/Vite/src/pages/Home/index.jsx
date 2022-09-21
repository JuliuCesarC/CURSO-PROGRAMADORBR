import "./styles.css";
import Card from "../../components/Card";
import { useState } from "react";

function Home() {
    const [guestName, setGuestName] = useState()
    return (
        <div className="container">
            <h1>Lista de Presença</h1>
            <h4>{guestName}</h4>
            <input
                type="text"
                placeholder="Digite o nome..."
                onChange={(e) => {
                    setGuestName(e.target.value);
                }}
            />
            <button type="button">Adicionar</button>

            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default Home;
