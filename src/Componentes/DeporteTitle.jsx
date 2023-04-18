import React, {useState, useEffect} from 'react'
import './DeporteTitle.css';


const DeporteTitle = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`deporte-container ${isLoaded ? 'loaded' : ''}`} style={{ opacity: isLoaded ? 1 : 0 }}>
        <h1>DEPORTE</h1>
    </div>
  )
}

export default DeporteTitle