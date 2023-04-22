import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../img/logo-white.png';
import ambitoImg from '../img/Ambito.png';
import clarinImg from '../img/Clarin.jpg';
import lanacionImg from '../img/Lanacion.png';
import todonoticias from '../img/todonoticias.png';
import pagina12Img from '../img/Pagina12.jpg';
import perfinImg from '../img/perfil.jpg';
import infobaeImg from '../img/infobae.svg';
import telamImg from '../img/Telam.png';
import carburando from '../img/carburando.png';
import ciudadmagazine from '../img/cuidadmagazine.png';
import infocielo from '../img/Infocielo.jpg';
import lagaceta from  '../img/lagaceta.jpg';
import ole from '../img/ole.jpg';
import paginaamarrillo from '../img/paginamillo.jpg';
import soydelrojo from '../img/soydelrojo.jpg';
import vozinterior  from '../img/vozinterior.png';

import './DeporteCards.css';

const DeporteCards = () => {

const [deporteArticles, setDeporteArticles] = useState([]);

useEffect (() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=ar&category=sports&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
    .then((response) => {
      setDeporteArticles(response.data.articles);
      console.log(response.data.articles);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);


useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);


 const getAuthorDeporteImg = (author) => {
    switch(author){
        case 'infobae' : return infobaeImg
        case 'Página/12' : return pagina12Img
        case "Télam" : return telamImg
        case 'TN - Todo Noticias' : return todonoticias
        case 'Clarín': return clarinImg
        case 'LA NACION': return lanacionImg
        case 'Infocielo' : return infocielo
        case 'Olé' : return ole
        case 'Soy Del Rojo' : return ole
        case 'La Página Millonaria' : return paginaamarrillo
        case 'Carburando' : return carburando
        case 'LA GACETA' : return lagaceta
        case 'La Voz del Interior' : return vozinterior
        case 'Ciudad Magazine' : return ciudadmagazine
        default : return logo
    }
 }



  return (
    <div className='card__container'>
    {deporteArticles.map(deporteArticle => {
        return (
    <Card key={deporteArticle.publishedAt} className='card'>
        {/* <CardActionArea> */}
            <CardMedia
                component="img"
                height="160"
                image={getAuthorDeporteImg(deporteArticle.author)}
                alt="noticia"
            />
            <CardContent className='card-content'>
                <Typography gutterBottom variant="h4" component="div" fontFamily='fantasy' color='black'>
                    {deporteArticle.author}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" fontSize={18} fontFamily='sans-serif' fontWeight='bold'>
                    {deporteArticle.title}
                </Typography>
            </CardContent>
        {/* </CardActionArea> */}
            <CardActions className='card-btn'>
            <Button className='btn1'>
                <Link className='btn-link' target='_blank' to={deporteArticle.url} >Seguir leyendo</Link>
            </Button>
            </CardActions>
      </Card>
    )
})}

</div>
  )
}

export default DeporteCards