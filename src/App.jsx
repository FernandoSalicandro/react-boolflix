import axios from 'axios'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GuestLayout from '../Layout/GuestLayout'

import HomePage from '../pages/HomePage'
import SerieTV from '../pages/SerieTV'
import Film from '../pages/Film'
import NuoviEPopolari from '../pages/NuoviEPopolari'
import LaMiaLista from '../pages/LaMiaLista'
import SfogliaPerLingua from '../pages/SfogliaPerLingua'
import { useContext } from 'react'
import FilmContext from '../Context/FilmContext'



function App() {

  const API_KEY = "748a46c34591b7183dcb9350cfbe97fa";
  
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("")
  const searchApiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`

  useEffect(() => {

    axios.get(searchApiUrl).then(res => {

      console.log(res.data.results);
      setMovie(res.data.results)
    }



    )


  }, [query])

  return (

    <>
      <FilmContext.Provider value={{movie, setQuery}}>

        <BrowserRouter>
          <GuestLayout />
          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path='/SerieTV' element={<SerieTV />} />
            <Route path='/Film' element={<Film />} />
            <Route path='/NuoviEPopolari' element={<NuoviEPopolari />} />
            <Route path='/LaMiaLista' element={<LaMiaLista />} />
            <Route path='/SfogliaPerLingua' element={<SfogliaPerLingua />} />

          </Routes>
        </BrowserRouter>
      </FilmContext.Provider>

    </>



  )
}

export default App
