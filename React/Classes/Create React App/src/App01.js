import "./App.css";
import Header from './Header'

// A função 'App' esta sendo importada dentro do arquivo index.js, onde os elementos que estamos criando abaixo serão renderizados lá.
function App() {
  // Dentro da função 'App' também estamos importando outras funções, como o arquivo 'header.js' que fica responsável pelo cabeçalho da pagina.
  // Podemos importar varias funções, cada arquivo funcionando como um módulo, e esse por sua vez responsável por 1 ou mais elementos.
  return (
    // Como nós preparamos o arquivo 'Header.js' para receber as informações que serão exibidas no cabeçalho, precisamos enviar elas através das propriedades da ta 'Header'
    <Header title='React' links = {['Documentação', 'Produtos', 'Contato', 'Login']}></Header>
  );
}

export default App;
