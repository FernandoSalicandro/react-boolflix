import { useContext } from 'react'
import FilmContext from '../Context/FilmContext'
import Header from '../Components/Header'
import axios from 'axios'


export default function HomePage() {
    const { movie } = useContext(FilmContext)
    return (
        <>
        {movie && movie.length>0 && <h1 className='mb-4'>La Tua Ricerca</h1>}
            
            <div className="container-fluid">
                <div className="row row-cols-6 gap-1">

                    {movie && movie.length > 0 && movie.map(curMovie => (

                        <div key={curMovie.id} className="card card-body">
                            <p className="">Titolo Originale : {curMovie.original_title}</p>
                            <p>Titolo : {curMovie.title}</p>
                            <p>Lingua : {curMovie.original_language}</p>
                             <p className="">voto: {curMovie.vote_average}</p>


                        </div>

                    ))}
                </div>
            </div>
        </>
    )


}