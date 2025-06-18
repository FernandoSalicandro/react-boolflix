export default function SeriesCard({series, getFlagIcon, voteRendering}){

    const {id, poster_path, title,original_name, name,original_language} = series;

    return (
        <>
            <div key={id} className="card movie-card">
                                <img
                                    className="img-fluid"
                                    src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                                    alt={title}
                                />
                                <div className="movie-details">
                                    <p><strong>Titolo Originale:</strong> {original_name}</p>
                                    <p><strong>Titolo:</strong> {name}</p>
                                    <p><strong>Lingua:</strong> {getFlagIcon(original_language)} </p>
                                    <p><strong>Voto:</strong> {voteRendering(series)}</p>
                                </div>
                            </div>
        </>
    )
}