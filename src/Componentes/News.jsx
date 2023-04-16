import React, {useState, useEffect} from 'react';
import './Newscards.css';

const News = () => {


    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`intro__container ${isLoaded ? 'loaded' : ''}`} style={{ opacity: isLoaded ? 1 : 0 }}>
        <div className='news__container'>
            <div className='title'> 
                <h1>ÚLTIMAS NOTICIAS</h1>
            </div>
        </div>
    </div>
  )
}

export default News;