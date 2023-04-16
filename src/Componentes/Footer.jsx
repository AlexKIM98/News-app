import React from 'react';
import face from '../img/perfil.jpeg';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='img__container'>
                    <img src={face} alt="AlexKim" class="image"/>
                    <span className='name'>Alex Kim</span>
                </div>
            </div>
            <div className='right'>
                <h2>Todo lo que necesitás saber en tu día a día en una sola página.</h2>
            </div>
        </div>
    </div>
  )
}

export default Footer