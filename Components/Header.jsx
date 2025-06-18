import { useContext, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import FilmContext from "../Context/FilmContext";

export default function Header() {

    const { setQuery } = useContext(FilmContext)
    const [userQuery, setUserQuery] = useState("");


    const navLinks = [
        {
            title: "Home",
            url: '/'
        },
        {
            title: 'Serie TV',
            url: 'SerieTV'
        },
        {
            title: 'Film',
            url: 'Film'
        },
        {
            title: 'Nuovi e Popolari',
            url: 'NuoviePopolari'
        },
        {
            title: 'La Mia Lista',
            url: 'LaMiaLista'
        },
        {
            title: 'Sfoglia per lingua',
            url: 'SfogliaPerLingua'
        }

    ]


    //funzione di ricerca 
    const search = (e) => {

        e.preventDefault();
        setQuery(userQuery)
        

    }
    return (
        <>

            <div className="nav-bar">

                <div className="nav-container">

                    <div className="icon">
                        <img src="netflix.webp" alt="" />
                    </div>

                    <div className="navLinks">

                        <ul>
                            {navLinks.map((curLink, index) => {
                                return (
                                    <li key={index}><NavLink to={curLink.url}>{curLink.title}</NavLink></li>
                                )
                            })}
                        </ul>


                    </div>

                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="text"
                            placeholder="Cerca film e serie tv"
                            aria-label="Cerca"
                            value={userQuery}
                            onChange={(e) => setUserQuery(e.target.value)}>
                        </input>
                        <button
                            className="btn btn-outline-danger"
                            type="submit"
                            onClick={search}
                        >Cerca
                        </button>
                    </form>

                </div>

            </div>

        </>
    )
}