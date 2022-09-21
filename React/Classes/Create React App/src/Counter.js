import React from "react";
// Dentro do React temos as 'propriedades' e os 'estados', propriedades são como a configuração inicial do elemento, elas não são alteradas. Quando for necessário alterar algo, utilizaremos o 'estado' do elemento.

// Posteriormente no lugar da classe utilizaremos os Hooks. Mas ainda é importante saber como funciona o react com as classes.

// ----- Métodos de ciclos de vida no React -----
// O primeiro ciclo de vida de uma classe é o método 'constructor', ele sera o  primeiro a ser executado quando o script chamar a classe.
// Outro ciclo de vida é o método 'render', ele que renderiza os elementos na tela, caso aconteça alguma alteração no 'estado' e nas 'propriedades', automaticamente ele atualiza os dados na tela. 
// O terceiro ciclo de vida 'shouldComponentUpdate', permite ou bloqueia a classe de ser atualizada na tela. Case seja setado como false, o método 'render' não ira atualizar as informações na tela.
// O quarto é o 'componentDidMount', esse método sera executado após os elementos serem renderizados na tela. Por exemplo, caso algum dado na tela seja atualizado de acordo com uma requisição em uma API, isso sera feito dentro deste método.
// O 'componentWillUnmount' é um método que remove algum elemento da tela.
class Counter extends React.Component {
    // Sempre que criarmos uma classe dentro do React, precisamos estender ela da classe 'React.Component'.
    constructor(props) {
        // Após criar a classe, mesmo sem declarar o método 'constructor' o script funcionará normalmente, pois ele utiliza o constructor da classe pai. Porém para trabalharmos com os 'estados', precisamos declarar um construtor na nossa classe. Ao fazer isso, os dados importantes serão sobrescritos, para isso utilizamos o 'super()'.
        super(props);
        // O super ira herdar todas as informações do construtor pai, para o construtor da nossa classe.

        // O 'estado' é um tipo de variável no React que quando esta sendo utilizada na tela do usuário e é atualizada, automaticamente ela sera renderizada novamente. Normalmente se utiliza o nome 'this.state'.
        this.state = { count: this.props.count };
        // Dentro do arquivo app.js estamos enviando o valor inicial para o 'count', para pegar essa informação utilizamos o 'this.props.count'.
        this.add = this.add.bind(this);
        // O método 'add' não tem acesso à variável 'count', para resolver isso utilizamos o 'bind(this)', ou seja, dentro do método 'add' o this irá se referenciar à classe 'Counter'.
    }
    // componentDidUpdate(){}
    // componentDidMount(){}
    // componentWillUnmount(){}
    add() {
        // this.setState({ count: this.state.count + 1 });
        // Como estamos utilizando o próprio 'state' para atualizar o estado atual do elemento, pode ocorrer um erro quando for necessário atualizar rapidamente e muitas vezes o estado. Utilizando o projeto atual, o erro seria que o script receba uma requisição para atualizar o estado antes da requisição anterior terminar, dessa forma  teríamos 2 requisições com o mesmo estado.
        // Para resolver isso utilizamos o 'setState' com uma função, isso cria uma fila de requisição, onde a proxima requisição só ira executar quando a requisição atual terminar. 
        this.setState((state) => {
            return { count: state.count + 1 };
        });
        // Para alterar o estado de algum elemento, precisamos utilizar o 'setState'. O 'count: this.state.count + 1' ira pegar o valor atual do 'count' e somar 1 toda vez que o método 'add' for chamado.
    }
    render() {
        return (
            <div>
                <h1>Counter : {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
            </div>
        );
    }
}

export default Counter;
