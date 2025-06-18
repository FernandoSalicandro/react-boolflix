import { useState, useEffect } from "react";
import axios from "axios";

export default function MovieCard({ movie, getFlagIcon, voteRendering, genresMap }) {
  const API_KEY = "748a46c34591b7183dcb9350cfbe97fa";
  const [showMore, setShowMore] = useState(false);
  const [cast, setCast] = useState([]);
  const { id, poster_path, title, original_title, original_language, genre_ids } = movie;

  useEffect(() => {

    if (showMore) {
      axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`).then(res =>{
        setCast(res.data.cast.slice(0, 5))
        console.log(genre_ids)
      }
      )
    }

  }, [showMore])

  return (
    <div className="card movie-card" style={{ position: "relative" }}>
      <img
        className="img-fluid"
        src={`https://image.tmdb.org/t/p/w342${poster_path}`}
        alt={title}
      />
      <div className="movie-details">
        <p><strong>Titolo Originale:</strong> {original_title}</p>
        <p><strong>Titolo:</strong> {title}</p>
        <p><strong>Lingua:</strong> {getFlagIcon(original_language)}</p>
        <p><strong>Voto:</strong> {voteRendering(movie)}</p>
        <button
          className="btn btn-outline-danger"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Chiudi Dettagli" : "Più Dettagli"}
        </button>
      </div>

      {showMore && (
        <>
          <div className="movie-more-details-overlay" onClick={() => setShowMore(false)}>
          <h3 >Cast Principale</h3>
          <ul className="cast-list">
            {cast.map(curActor => (
              <li key={curActor.id}>{curActor.name}</li>
            ))}
          </ul> 
          <h3>Generi</h3>
         <p>{genre_ids.map(gen => genresMap[gen]).filter(Boolean).join(', ')}</p>
        </div>
       
        </>
      
      )}


    </div>
  );
}
