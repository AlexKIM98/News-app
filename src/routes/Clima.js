import React from 'react'
import NavbarComp from '../Componentes/NavbarComp'
import Footer from '../Componentes/Footer'
import ClimaCard from '../Componentes/ClimaCard'



const Clima = () => {
  return (
    <div>
      <NavbarComp/>
      <ClimaCard/>
      <Footer/>
    </div>
  )
}

export default Clima