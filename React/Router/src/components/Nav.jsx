import { Link } from "react-router-dom";
// É preciso utilizar o 'Link' no lugar da tag 'a', pois ao clicar na tag 'a' toda a pagina seria recarregada.

export default function Nav() {
  return (
    <nav className="Menu">
      <h3><Link to="/">Curso React</Link></h3>
      <ul className="NavMenu">
        <li><Link to="/aulas">Aulas</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
      </ul>
    </nav>
  );
}
