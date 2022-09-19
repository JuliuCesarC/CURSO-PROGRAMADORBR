import React from "react";
// Dentro do React temos as 'propriedades' e os 'estados', propriedades são como a configuração inicial do elemento, elas não são alteradas. Quando for necessario alterar algo, utilizaremos o 'estado' do elemento.
// Posteriormente no lugar da classe utilizaremos os Hooks. Mas ainda é importante saber como funciona o react com as classes.

class Counter extends React.Component {
    // Sempre que criarmos uma classe dentro do React, precisamos estender ela da classe 'React.Component'.
    constructor(props) {
        // Após criar a classe, mesmo sem declarar o método 'constructor' o script funcionará normalmente, pois ele utiliza o constructor da classe pai. Porém para trabaharmos com os 'estados', precisamos declarar um construtor na nossa classe. Ao fazer isso, os dados importantes seram sobrescritos, para isso utilizamos o 'super()'.
        super(props);
        // O super ira herdar todas as informações do construtor pai, para o construtor da nossa classe.

        // O 'estado' é um tipo de variavel no React que quando esta sendo utilizada na tela do usuario e é atualizada, automaticamente ela sera renderizada novamente. Normalmente se utiliza o nome 'this.state'.
        this.state = { count: this.props.count };
        // Dentro do arquivo app.js estamos enviando o valor inicial para o 'count', para pegar essa informação utilizamos o 'this.props.count'.
        this.add = this.add.bind(this);
        // O método 'add' não tem acesso à variavel 'count', para resolver isso utilizamos o 'bind(this)', ou seja, dentro do método 'add' o this irá se referenciar à classe 'Counter'.
    }
    add() {
        // this.setState({ count: this.state.count + 1 });
        // Como estamos utilizando o proprio 'state' para atualizar o estado atual do elemento, pode ocorrer um erro quando for necessario atualizar rapidamente e muitas vezes o estado. Utilizando o projeto atual, o erro seria que o script receba uma requisição para atualizar o estado antes da requisição anterior terminar, dessa forma  teriamos 2 requisições com o mesmo estado.
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
