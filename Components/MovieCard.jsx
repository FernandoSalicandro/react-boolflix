// src/components/MovieCard.jsx

export default function MovieCard({ movie, getFlagIcon, voteRendering }) {
  const { id, poster_path, title, original_title, original_language } = movie;

  return (
    <div key={id} className="card movie-card">
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
      </div>
    </div>
  );
}
