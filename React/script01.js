const root = document.querySelector("#root");
// Neste arquivo as funções do React estão sendo cridas manualmente apenas para exemplificar como funciona algumas das funcionalidade do react.

// Dentro do React temos o método 'createElement' que como o nome sugere serve para criar um elemento html, o primeiro argumento é a tag que sera criada, o segundo é os atributos do elemento, e o terceiro é o conteudo.
const t1 = React.createElement(
    "h1",
    { id: "tituloPrincipal", class: "title" },
    "Hello World!"
);
const t2 = React.createElement(
    "h4",
    { id: "subTitulo", class: "subTitle" },
    "Lorem ipsum"
);

// Ainda no 'createElement', também podemos aninhar outros elementos dentro da tag que esta sendo criada.
const headLine = React.createElement('div', null, t1,t2)

ReactDOM.render(headLine, root)