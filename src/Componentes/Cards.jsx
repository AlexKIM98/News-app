import React, {useState, useEffect} from 'react'
import axios from 'axios'
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
import './Cards.css';

const Cards = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
        .then((response) => {
            setArticles(response.data.articles)
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);


    const getAuthorImg = (author) => {
        switch(author){
             case 'Clarín': return clarinImg
             case 'LA NACION': return lanacionImg
             case 'ámbito.com' : return ambitoImg
             case 'TN - Todo Noticias' : return todonoticias
             case 'Página/12' : return pagina12Img
             case "Télam" : return telamImg
             case 'Perfil.com' : return perfinImg
             case 'infobae' : return infobaeImg
             default : return logo
        }
    }


  return (
    <div >
        <div className='card__container'>
            {articles.map(article => {
                return (
            <Card key={article.publishedAt} className='card'>
                {/* <CardActionArea> */}
                    <CardMedia
                        component="img"
                        height="160"
                        image={getAuthorImg(article.author)}
                        alt="noticia"
                    />
                    <CardContent className='card-content'>
                        <Typography gutterBottom variant="h4" component="div" fontFamily='fantasy' color='black'>
                            {article.author}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" fontSize={18} fontFamily='sans-serif' fontWeight='bold'>
                            {article.title}
                        </Typography>
                    </CardContent>
                {/* </CardActionArea> */}
                    <CardActions className='card-btn'>
                    <Button className='btn1'>
                        <Link className='btn-link' target='_blank' to={article.url} >Seguir leyendo</Link>
                    </Button>
                    </CardActions>
              </Card>
            )
        })}

        </div>
    </div>
  )
}

export default Cards