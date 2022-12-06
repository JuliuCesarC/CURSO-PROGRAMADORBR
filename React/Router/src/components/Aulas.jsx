import { Link, useLocation } from "react-router-dom";
import aulas from "./Data";

export default function Aulas() {
  const {pathname} = useLocation()
  console.log(pathname);
  return (
    <div>
      <h2>Aulas</h2>
      <ul>
        {aulas.map((eAulas) => {
          return <li key={eAulas.id}><Link to={`${pathname}/${eAulas.id}`} >{eAulas.title}</Link></li>;
        })}
      </ul>
    </div>
  );
}
