import React from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';

import Home from "./routes/Home";
import Musica from "./routes/Musica";
import Cine from "./routes/Cine";
import Clima from "./routes/Clima";


function App() {
  return (
    <React.Fragment>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/musica' element={<Musica/>} />
        <Route path='/cine' element={<Cine/>}/>
        <Route path='/clima' element={<Clima/>}/>
     </Routes>
    </React.Fragment>
  );
}

export default App;
