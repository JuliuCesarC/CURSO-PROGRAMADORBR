import "./App.css";
import Aulas from "./components/Aulas";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav";
import Sobre from "./components/Sobre";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aula from "./components/Aula";
import Assistir from "./components/Assistir";
// O 'as' pode ser usado para dar um apelido a um nome de uma variável que foi importada.

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes> 
          <Route path="/" element={<Home />}/>
          <Route path="/assistir" element={<Assistir />}/>
          <Route path="/aulas/:id" element={<Aula />}/>
          <Route path="/aulas" element={<Aulas />}/>
          <Route path="/sobre" element={<Sobre />}/>
        </Routes>
      </div>
    </Router>
  );
}
