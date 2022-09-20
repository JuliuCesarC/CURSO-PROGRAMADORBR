import React, { useEffect, useState } from "react";
// Para utilizar os hooks precisamos importar eles, facilmente são identificados por começar com o 'use...'. Temos o 'useState, useEffect, useContext' entre outros. Para uma descrição detalhada de cada Hooks, pesquisar na documentação:https://reactjs.org/docs/hooks-state.html ou https://www.w3schools.com/react/react_hooks.asp.

// Os 'Hooks' são utilizadas em funções, nos permitindo ter acesso ao estado de variaveis e as funcionalidades do React, como os ciclos de vida. Essas funcionalidades reduzem consideravelmente a quantidade de código necessarios para executar algo, comparado com as mesmas funções utilizando Classes.
function Counter(props) {
    // Para ter acesso ao estado de uma variavel com a classe, era apenas necessario iniciar ela com um 'this.state =...', porem como estamos em uma função, não herdamos nenhum método. Precisamos então declarar uma variavel utilizando os hooks.
    let [contador, setContador] = useState(props.count);
    // O 'useState' retorna um array com 2 índices, o primeiro é o estado inicial da variavel, e esse estado é definido no parâmetro do 'useState', já o segundo é uma função que nos permite atualizar o valor do estado da variavel.
    // A partir do ES6 podemos fazer uma desestruturação na hora de declarar uma variavel, ela pode ser feita utilizando vetor[] ou um objeto{}, no nosso caso utilizamos o vetor. Por consenso a segunda variavel tem o mesmo nome da primeira, porem com o 'set' na frente.
    
    useEffect(() => {
        let num = parseInt(localStorage.getItem("count"));
        console.log(contador);
        contador = num
        setContador(num)
        

        return()=>{
            console.log('Utilizando o Hook com o ciclo de vida "componentWillUnmount".')
        }
    },[]);

    useEffect(() => {
        document.title = `Contador: ${contador}`;
        localStorage.setItem("count", contador);
    },[contador]);

    function add() {
        setContador((prevContador)=>prevContador + 1);
        // Com o 'setContador' atualizamos o valor da variavel.
    }
    return (
        <div>
            <h1>Counter : {contador}</h1>
            <button onClick={add}>Add</button>
        </div>
    );
}

export default Counter;
