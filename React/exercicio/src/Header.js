import React from "react";

// Abaixo temos a função reponsavel pelo cabeçalho da pagina. Os titulos e links estão sendo criados de maneira mais generica, dessa forma esse arquivo funciona como um módulo, onde podemos colocalo em outros projetos sendo necessarios apenas passar as informações solicitadas.
function Header(props){
    // Recomendado na hora de criar um novo componente, utilizar a primeira letra maiuscola, para diferenciar o que é um componte que nos criamos, de um componente padrão.
    // Sempre que misturar JSX com JS, utilizar as chaves{}.
    return (
    <header className="header">
    <h1 className="Title">{props.title}</h1>
    
        <Menu links={props.links}></Menu>
  </header>)
}

function Menu(props){
    return (
    <ul className="menu">
      <li>{props.links[0]}</li>
      <li>{props.links[1]}</li>
      <li>{props.links[2]}</li>
    </ul>)
}

export default Header;