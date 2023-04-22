import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import soleado from '../img/soleado.png';
import nublado from '../img/nublado.png';
import lluvioso from '../img/lluvioso.png';
import default1 from '../img/default.png';
import './Clima.css';
import axios from 'axios';




const ClimaCard = () => {
  const [ciudad, setCiudad] = useState('Buenos Aires');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeather(ciudad);
  }, [ciudad]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cityArray = [
    'Buenos Aires',
    'San Fernando del Valle de Catamarca',
    'Córdoba',
    'Corrientes',
    'Entre Rios',
    'Formosa',
    'La Pampa',
    'La Rioja',
    'Mendoza',
    'Misiones',
    'Neuquén',
    'Rio Negro',
    'Salta',
    'San Juan',
    'San Luis',
    'Santa Cruz',
    'Santa Fe',
    'Santiago del Estero',
    'San Miguel de Tucumán',
    'Bariloche',
  ];

  const fetchWeather = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},AR&appid=abacb7cbeababf081ce333d7023822aa`
      )
  .then((res) => {
    console.log(res);
    setWeatherData(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
};

const fetchBuenosAiresWeather = () => {
  setCiudad('Buenos Aires');
  fetchWeather('Buenos Aires');
};


const getWeatherImg = (main) => {
  switch(main) {
    case 'Clouds' : return nublado
    case 'Clear' : return soleado
    case 'Rain' : return lluvioso
    default : return default1
  }
}

return (
<div className='card__container'>
  <div className='weather-display'>
  <Card key="buenosaires" className="card__weather">
        {weatherData && (
          <>
            <CardMedia
             className='card__media'
              component="img"
              height="150"
              image={getWeatherImg(weatherData.weather[0].main)}
              alt="weather icon"
            />
            <CardContent className="card-content">
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                fontFamily="fantasy"
                color="lightblue"
              >
                {weatherData.name}
              </Typography>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                fontFamily="fantasy"
                color="white"
              >
                {Math.round(weatherData.main.temp - 273.15)}°C <br/>
                {Math.round(weatherData.main.temp_max - 273.15)}°C Máxima <br/>
                {Math.round(weatherData.main.temp_min - 273.15)}°C Mínima
              </Typography>
              <Typography
                variant="h4"
                component="div"
                fontFamily="fantasy"
                color="grey"
              >
                {weatherData.weather[0].main}
              </Typography>
            </CardContent>
          </>
        )}
        {!weatherData && (
          <CardContent className="card-content">
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              fontFamily="fantasy"
              color="black"
            >
              Loading...
            </Typography>
          </CardContent>
        )}
      </Card>
      <div className='card-cities'>
    {cityArray.map((city) => (
      <Card key={city} className='card city'>
        <CardContent className='card-content'>
          <Typography
            gutterBottom
            variant='h4'
            component='div'
            fontFamily='fantasy'
            color='white'
          >
            {city}
          </Typography>
          <CardActions className='card-btn city'>
          <Button
            className='btn1 city'
            onClick={() => {fetchWeather(city); handleClick(); }}
          >
            Ver Clima
          </Button>
        </CardActions>
        </CardContent>
        
      </Card>
    ))}
    </div>
  </div>
</div>
);
};

export default ClimaCard;