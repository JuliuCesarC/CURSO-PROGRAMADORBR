import React from "react";
import Menu from "./Menu";

// Abaixo temos a função repensável pelo cabeçalho da pagina. Os títulos e links estão sendo criados de maneira mais genérica, dessa forma esse arquivo funciona como um módulo, onde podemos coloca-lo em outros projetos sendo necessários apenas passar as informações solicitadas.
function Header(props){
    // Recomendado na hora de criar um novo componente, utilizar a primeira letra maiúscula(Header, Menu...), para diferenciar o que é um componente que nós criamos, de um componente padrão.
    // Sempre que misturar JSX com JS, utilizar as chaves{}.
    return (
      // Paras as classes do html utilizamos o 'className' pois dentro do JS a palavra 'class' é reservada.
    <header className="header">
    <h1 className="Title">{props.title}</h1>
        <Menu links={props.links}></Menu>
  </header>)
}

export default Header;