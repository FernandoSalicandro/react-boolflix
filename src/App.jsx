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
import FilmContext from '../Context/FilmContext'
import 'flag-icons/css/flag-icons.min.css';






function App() {

  const API_KEY = "748a46c34591b7183dcb9350cfbe97fa";

  const [movie, setMovie] = useState([]);
  const [series, setSeries] = useState([]);
  const [query, setQuery] = useState("")
  const searchMovieApiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  const searchSeriesApiUrl = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}`

  useEffect(() => {
    if (query.trim() !== "") {

      axios.get(searchMovieApiUrl).then(res => {
        setMovie(res.data.results)
      }
      )
    }



  }, [query])

  useEffect(() => {

    if (query.trim() !== "") {

      axios.get(searchSeriesApiUrl).then(res => {
        setSeries(res.data.results)
      })

    }



  }, [query])

  return (

    <>
      <FilmContext.Provider value={{ movie, series, setQuery }}>

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
