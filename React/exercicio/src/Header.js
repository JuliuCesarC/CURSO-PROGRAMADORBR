import React from "react";
import Menu from "./Menu";

// Abaixo temos a função reponsavel pelo cabeçalho da pagina. Os titulos e links estão sendo criados de maneira mais generica, dessa forma esse arquivo funciona como um módulo, onde podemos colocalo em outros projetos sendo necessarios apenas passar as informações solicitadas.
function Header(props){
    // Recomendado na hora de criar um novo componente, utilizar a primeira letra maiuscola(Header, Menu...), para diferenciar o que é um componte que nós criamos, de um componente padrão.
    // Sempre que misturar JSX com JS, utilizar as chaves{}.
    return (
      // Paras as classes do html utilizamos o 'className' pois dentro do JS a palavra 'class' é reservada.
    <header className="header">
    <h1 className="Title">{props.title}</h1>
        <Menu links={props.links}></Menu>
  </header>)
}

export default Header;