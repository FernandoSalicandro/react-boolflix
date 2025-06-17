import { useContext } from 'react'
import FilmContext from '../Context/FilmContext'
import Header from '../Components/Header'
import axios from 'axios'


export default function HomePage() {
  const { movie } = useContext(FilmContext);

  return (
    <>
      {movie && movie.length > 0 && <h1 className="mb-4">La Tua Ricerca</h1>}

        <div className="container-fluid">
        <div className="row row-cols-6 gap-1">
          {movie &&
            movie.length > 0 &&
            movie.map((curMovie) => (
              <div key={curMovie.id} className="card movie-card">
                <img
                  className="img-fluid"
                  src={`https://image.tmdb.org/t/p/w342${curMovie.poster_path}`}
                  alt={curMovie.title}
                />
                <div className="movie-details">
                  <p><strong>Titolo Originale:</strong> {curMovie.original_title}</p>
                  <p><strong>Titolo:</strong> {curMovie.title}</p>
                  <p><strong>Lingua:</strong> {curMovie.original_language}</p>
                  <p><strong>Voto:</strong> {curMovie.vote_average}</p>
                </div>
              </div>
            ))}
        </div>
      </div>


  
    </>
  );
}
