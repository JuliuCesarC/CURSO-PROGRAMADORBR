import React from "react";

function Menu(props){
    return (
    <ul className="menu">
      {props.links.map((link, index)=><li key={index}>{link}</li>)}
    </ul>)
    // Quando estamos criando um objeto dinamicamente utilizando o 'map', o programa entende que isso é uma lista, e todo objeto que seja uma lista precisa de uma 'key', e as 'keys' não podem ser iguais. No nosso caso utilizamos 'index' do array como uma 'key'.
}

export default Menu