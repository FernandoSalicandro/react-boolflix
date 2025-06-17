import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GuestLayout from '../Layout/GuestLayout'

import HomePage from '../pages/HomePage'
import SerieTV from '../pages/SerieTV'
import Film from    '../pages/Film'
import NuoviEPopolari from '../pages/NuoviEPopolari'
import LaMiaLista from '../pages/LaMiaLista'
import SfogliaPerLingua from '../pages/SfogliaPerLingua'



function App() {

  return (

    <>
      <BrowserRouter>
        <GuestLayout />
        <Routes>


          <Route path="/" element={<HomePage />} />
          <Route path='/SerieTV' element={<SerieTV />}/>
          <Route path='/Film' element={<Film />}/>
          <Route path='/NuoviEPopolari' element={<NuoviEPopolari />}/>
          <Route path='/LaMiaLista' element={<LaMiaLista />}/>
          <Route path='/SfogliaPerLingua' element={<SfogliaPerLingua />}/>

        </Routes>






      </BrowserRouter>

    </>



  )
}

export default App
