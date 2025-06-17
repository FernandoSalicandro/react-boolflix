import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {

    const [userSearch, setUserSearch] = useState("");
    

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
    return (
        <>

            <div className="nav-bar">

                <div className="nav-container">

                    <div className="icon">
                        <img src="Netflix_icon.svg" alt="" />
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
                            placeholder="Cerca"
                            aria-label="Cerca"
                            value={userSearch}
                            onChange={(e)=> setUserSearch(e.target.value)}>
                            </input>
                        <button className="btn btn-outline-danger" type="submit">Search</button>
                    </form>

                </div>

            </div>

        </>
    )
}