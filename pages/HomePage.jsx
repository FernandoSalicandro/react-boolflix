import { useContext, useState, useRef } from 'react'
import FilmContext from '../Context/FilmContext'
import MovieCard from '../Components/MovieCard';
import SeriesCard from '../Components/SeriesCard';








export default function HomePage() {
    const { movie, series, movieGenres, seriesGenres } = useContext(FilmContext);
    const filmCarouselRef = useRef(null);
    const seriesCarouselRef = useRef(null);
    const [selectedGenre, setSelectedGenre] = useState(null)
    const [selectedSeriesGenre, setSelectedSeriesGenre] = useState(null);
    const [showGenreFilter, setShowGenreFilter] = useState(false);
    const [showSeriesGenreFilter, setShowSeriesGenreFilter] = useState(false);


    const getFlagIcon = (lang) => {
        const langToCountry = {
            en: 'us',
            it: 'it',
            fr: 'fr',
            de: 'de',
            ja: 'jp',
            ko: 'kr',
            es: 'es',
            zh: 'cn',
            ru: 'ru',
            hi: 'in',
        };

        const code = langToCountry[lang] || 'un';
        return <span className={`fi fi-${code}`} style={{ marginRight: '5px' }}></span>;
    };

    const scrollLeft = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };


    const voteRendering = (film) => {
        const toFive = Math.ceil(parseFloat(film.vote_average) / 2);
        const emptyStars = 5 - toFive;

        const voteArr = new Array(toFive).fill(<i className="fa-solid fa-star yellow"></i>)
        const emptyArr = new Array(emptyStars).fill(<i className="fa-regular fa-star"></i>)
        const finalStars = [...voteArr, ...emptyArr]
        return finalStars

    }


    return (
        <>
            {movie && movie.length > 0 && (
                <>
                    <h1 className="mb-4 search-section">Film</h1>
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => setShowGenreFilter(!showGenreFilter)}
                    >Filtra per genere
                    </button></>)}

            {showGenreFilter && (
                <select
                    className='form-select mb-4'
                    defaultValue={""}
                    onChange={(e) => setSelectedGenre(e.target.value)}
                >
                    <option value="">Tutti I Generi</option>
                    {Object.entries(movieGenres).map(([id, name]) => (

                        <option key={id} value={id}>{name}</option>
                    ))}


                </select>


            )}


            <div className="container-fluid carousel-wrapper">
                <button className="indietro" onClick={() => scrollLeft(filmCarouselRef)}>
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                <button className="avanti" onClick={() => scrollRight(filmCarouselRef)}>
                    <i className="fa-solid fa-angle-right"></i>
                </button>

                <div className="row row-cols-5 gap-1" ref={filmCarouselRef}>
                    {movie &&
                        movie.length > 0 &&
                        movie
                            .filter(curMovie => {
                                if (!selectedGenre) return true;
                                return curMovie.genre_ids.includes(parseInt(selectedGenre));
                            })
                            .map(curMovie => (
                                <MovieCard
                                    key={curMovie.id}
                                    movie={curMovie}
                                    getFlagIcon={getFlagIcon}
                                    voteRendering={voteRendering}
                                    genresMap={movieGenres}
                                />
                            ))}
                </div>
            </div>


            {series && series.length > 0 && (
                <>
                    <h1 className="mb-4 search-section">Serie Tv</h1>
                    <div className="wrapper d-flex">


                        
                    </div>
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => setShowSeriesGenreFilter(!showSeriesGenreFilter)}
                    >
                        Filtra per genere
                    </button>

                    {showSeriesGenreFilter && (
                        <select
                            className="form-select mb-4"
                            defaultValue={""}
                            onChange={(e) => setSelectedSeriesGenre(e.target.value)}
                        >
                            <option value="">Tutti I Generi</option>
                            {Object.entries(seriesGenres).map(([id, name]) => (
                                <option key={id} value={id}>{name}</option>
                            ))}
                        </select>
                    )}
                </>
            )}









            <div className="container-fluid carousel-wrapper">
                <button className="indietro" onClick={() => scrollLeft(seriesCarouselRef)}><i className="fa-solid fa-angle-left"></i></button>
                <button className="avanti" onClick={() => scrollRight(seriesCarouselRef)}><i className="fa-solid fa-angle-right"></i></button>
                <div className="row row-cols-5 gap-1 h-300" ref={seriesCarouselRef}>

                    {series &&
                        series.length > 0 &&
                        series
                            .filter(curSeries => {
                                if (!selectedSeriesGenre) return true;
                                return curSeries.genre_ids.includes(parseInt(selectedSeriesGenre));
                            })
                            .map((curSeries) => (
                                <SeriesCard
                                    key={curSeries.id}
                                    series={curSeries}
                                    getFlagIcon={getFlagIcon}
                                    voteRendering={voteRendering}
                                    genresMap={seriesGenres}
                                />
                            ))}

                </div>
            </div>



        </>
    );
}
