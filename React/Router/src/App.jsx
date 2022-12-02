import "./App.css";
import Aulas from "./components/Aulas";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav";
import Sobre from "./components/Sobre";

import { BrowserRouter as Router, Route } from "react-router-dom";
// O 'as' pode ser usado para dar um apelido a um nome de uma variável que foi importada.

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route>
          <Home />
        </Route>
        <Route>
          <Aulas />
        </Route>
        <Route>
          <Sobre />
        </Route>
      </div>
    </Router>
  );
}
