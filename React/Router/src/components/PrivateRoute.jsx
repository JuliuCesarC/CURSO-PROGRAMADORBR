import { Route, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children, ...rest }) {
  const location = useLocation()
  const login = useSelector((state) => state.reducer.value);

  // Caso o usuário nao esteja logado ele sera redirecionado para a pagina de acesso negado.
  return login ? children : <Navigate to="/negado" state={{from: location}} replace />;
  // Dentro do 'Navigate' no parâmetro 'state' colocamos o 'location', que servira para que quando o usuário efetue o login, ele seja redirecionado para a pagina que ele estava tentando entrar. 
}
