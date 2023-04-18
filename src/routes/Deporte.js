import React from 'react'
import NavbarComp from '../Componentes/NavbarComp'
import Footer from '../Componentes/Footer'
import DeporteCards from '../Componentes/DeporteCards'
import DeporteTitle from '../Componentes/DeporteTitle'


const Deporte = () => {
  return (
    <div>
      <NavbarComp/>
      <DeporteTitle/>
      <DeporteCards/>
      <Footer/>
      
    </div>
  )
}

export default Deporte;