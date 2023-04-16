import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from '../img/logo-no-background.png'

import './Navbar.css';

const NavbarComp = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }
    
  return (
    <>
     <Stack className='nav-header' 
    direction="row" 
    alignItems="center" 
    p={2}
    sx={{
        position:'sticky', 
        justifyContent:'space-between',
        pt:0,
        pb:0,
    }}
     >
        <Link to='/'>
            <img src={logo} style={{width: 80, height: 80, marginTop: 0, }} />
        </Link>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/' className='nav-link' id='principal'>Últimas Noticias</Link>
                <span> |</span>
            </li>
            <li>
                <Link to='/musica' className='nav-link' id='musica'>Música</Link>
                <span> |</span>
            </li>
            <li>
                <Link to='cine' className='nav-link' id='cine'>Cine</Link>
                <span> |</span>
            </li>
            <li>
                <Link to='clima' className='nav-link' id='clima' >Clima</Link>
            </li>
           
        </ul>

        <div className='hamburguer' onClick={handleClick}>
        {click ? (<FaTimes size={20}  style={{color:'#f50057'}}/>) : (<FaBars size={20}  style={{color:'#64ffda'}}/>)}
        </div>
        
      </Stack>  
    </>
  )
}

export default NavbarComp;