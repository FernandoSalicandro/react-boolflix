import { useContext } from 'react'
import FilmContext from '../Context/FilmContext'
import Header from '../Components/Header'
import axios from 'axios'


export default function HomePage() {
    const { movie, series } = useContext(FilmContext);

    const voteRendering = (film) => {
        const toFive = Math.ceil(parseFloat(film.vote_average) / 2);
        const emptyStars = 5 - toFive;

        const voteArr = new Array(toFive).fill(<i class="fa-solid fa-star"></i>)
        const emptyArr = new Array(emptyStars).fill(<i class="fa-regular fa-star"></i>)
        const finalStars = [...voteArr, ...emptyArr]
        return finalStars

    }


    return (
        <>
            {movie && movie.length > 0 && <h1 className="mb-4 search-section">Film</h1>}

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
                                    <p><strong>Voto:</strong> {voteRendering(curMovie)}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            {series && series.length > 0 && <h1 className="mb-4 search-section">Serie Tv</h1>}

            <div className="container-fluid">
                <div className="row row-cols-6 gap-1">
                    {series &&
                        series.length > 0 &&
                        series.map((curSeries) => (
                            <div key={curSeries.id} className="card movie-card">
                                <img
                                    className="img-fluid"
                                    src={`https://image.tmdb.org/t/p/w342${curSeries.poster_path}`}
                                    alt={curSeries.title}
                                />
                                <div className="movie-details">
                                    <p><strong>Titolo Originale:</strong> {curSeries.original_title}</p>
                                    <p><strong>Titolo:</strong> {curSeries.title}</p>
                                    <p><strong>Lingua:</strong> {curSeries.original_language}</p>
                                    <p><strong>Voto:</strong> {voteRendering(curSeries)}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>



        </>
    );
}
