import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import aulas from "./Data";

function useAula(){
  const id = useParams().id
  return aulas.filter(data=>data.id == id)[0]
}

export default function Aula() {
  const aula = useAula()

  return (
    <div className="pageAula">
      <h2>{aula.title}</h2>
      <h4>{aula.desc}</h4>
      <p className="btnAssistir"><Link to={`/assistir?video=${aula.url}`} >Assistir</Link></p>
    </div>
  );
}
