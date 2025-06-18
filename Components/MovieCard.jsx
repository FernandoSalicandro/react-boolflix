import { useState } from "react";

export default function MovieCard({ movie, getFlagIcon, voteRendering }) {
  const [showMore, setShowMore] = useState(false);
  const { id, poster_path, title, original_title, original_language } = movie;

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
        <div className="movie-more-details-overlay" onClick={() => setShowMore(false)}>
          <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            temporibus odit voluptatibus, impedit quaerat, similique
            necessitatibus architecto eos sed fuga, quibusdam at magni nostrum
            vitae minima ullam nesciunt laudantium aliquam.
          </p>
        </div>
      )}
    </div>
  );
}
