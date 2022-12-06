import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Assistir() {
  const query = useQuery();

  return (
    <div className="Play">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${query.get('video')}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
