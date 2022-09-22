import React from "react";
import "./style.css";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    TesteLog(id) {
        console.log("Teste Click: ");
    }
    render() {
        return (
            <div>
                {this.props.guestCard.map((guest, index)=>{
                    console.log(guest)
                })}
                
            </div>
        );
    }
}

export default Card;
