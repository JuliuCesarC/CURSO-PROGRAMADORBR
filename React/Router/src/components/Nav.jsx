import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// É preciso utilizar o 'Link' no lugar da tag 'a', pois ao clicar na tag 'a' toda a pagina seria recarregada.
import { useSelector } from "react-redux";
import Auth from "./authButton";

export default function Nav() {
  const login = useSelector((state) => state.reducer.value);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let FROM = location.state?.from?.pathname || "/";
    // No arquivo PrivateRoute setamos o 'location', que é a pagina ao qual o usuário tentou entrar sem o login. Caso o usuário efetue o login, podemos redirecionar ele para esta pagina com o 'navigate' informando a localização 'FROM'.

    if (login) {
      navigate(FROM, { replace: true });
      // O 'replace' serve para substituir no historio de navegação a pagina de login, dessa forma caso o usuário clique em retornar, ele ira voltar para a pagina anterior a do login.
    }
  }, [login]);

  return (
    <nav className="Menu">
      <h3>
        <Link to="/">Curso React</Link>
      </h3>
      <ul className="NavMenu">
        <li>
          <Auth />
        </li>
        <li>
          <Link to="/aulas">Aulas</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}
