import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'; //Questo mi serve per fare in modo che quando cambia il path (link) parta di nuovo la chiamata API.

export default function JumboPreview() {
    const API_KEY = "748a46c34591b7183dcb9350cfbe97fa";
    const [movieInfo, setMovieInfo] = useState(null)
    const location = useLocation() //Questo mi serve per fare in modo che quando cambia il path (link) parta di nuovo la chiamata API.


    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`) //chiamata TMDBp
            .then((res) => {
                const results = res.data.results; //Array di film (20)

                if (results.length >= 20) {
                    const randomIndex = Math.floor(Math.random() * 20);
                    setMovieInfo(results[randomIndex]); //estraggo casualmente un film dall'array
                }
            });
    }, [location.pathname]);//sintassi per il cambio path di location().

    // Protezione contro il rendering anticipato
    if (!movieInfo) return null;

    return (
        <>
            <div
                className="jumbo-img"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieInfo.poster_path})` //cambio dinamicamente il poster del jumbo 
                }}
            >
                <div className="jumbo-row">
                    <div className="jumbo-cont">
                        <h2>{movieInfo.title}</h2>
                        <p>{movieInfo.overview}</p>

                        <div className="jumbo-wrapper">
                            <button className="btn-play">
                                <i className="fa-solid fa-play"></i>
                                <span>Riproduci</span>
                            </button>
                            <button className="btn-info">
                                <i className="fa-regular fa-circle-question"></i>
                                <span>Info</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
