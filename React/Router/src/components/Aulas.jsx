import aulas from "./Data";

export default function Aulas() {
  return (
    <div>
      <h2>Aulas</h2>
      <ul>
        {aulas.map((eAulas) => {
          return <li key={eAulas.id}>{eAulas.title}</li>;
        })}
      </ul>
    </div>
  );
}
