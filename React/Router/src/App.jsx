import "./App.css";
import Aulas from "./components/Aulas";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav";
import Sobre from "./components/Sobre";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../reducers/loginReducer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// O 'as' pode ser usado para dar um apelido a um nome de uma variável que foi importada.
import Aula from "./components/Aula";
import Assistir from "./components/Assistir";

export default function App() {
  const store = configureStore({
    reducer: loginReducer,
  });

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assistir" element={<Assistir />} />
            <Route path="/aulas/:id" element={<Aula />} />
            <Route path="/aulas" element={<Aulas />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
