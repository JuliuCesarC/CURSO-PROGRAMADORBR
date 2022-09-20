import "./App.css";
import React from "react";
import Header from './Header01'
import Counter from './Counter'

function App() {
  return (
    <><Header title='React' links={['Documentação', 'Produtos', 'Contato', 'Login']}> </Header>
    <Counter count='5'></Counter>
    </>
  );
}

export default App;
