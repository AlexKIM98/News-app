import React from 'react'
import NavbarComp from '../Componentes/Navbar'
import News from '../Componentes/News'
import Cards from '../Componentes/Cards'
import Footer from '../Componentes/Footer'


const Home = () => {
  return (
    <div>
        <NavbarComp/>
        <News/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default Home