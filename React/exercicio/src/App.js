import "./App.css";
import Header from './Header'

// A função 'App' esta sendo importada dentro do arquivo index.js, onde os elementos que estamos criando abaixo seram renderizados lá.
function App() {
  // Dentro da função 'App' também estamos importando outras funções, como o arquivo 'header.js' que fica responsavel pelo cabeçalho da pagina.
  // Podemos importar varias funções, cada arquivo funcionando como um módulo, responsavel por 1 ou mais elementos.
  return (
    <Header title='React' links = {['Documentação', 'Produtos', 'Contato']}></Header>
  );
}

export default App;
