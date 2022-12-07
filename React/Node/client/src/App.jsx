import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/api/videos")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);

  return (
  <div className="App">
    {videos.map((id, index)=>{
      return(
        <a key={index} href={`https://www.youtube.com/watch?v=${id}`}>
          <img src={`https://img.youtube.com/vi/${id}/0.jpg`} alt="thumb" />
        </a>
      )
    })}
  </div>
  )
}

export default App;

