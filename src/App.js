import React from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';

import Home from "./routes/Home";
import Clima from "./routes/Clima";
import Deporte from "./routes/Deporte";


function App() {
  return (
    <React.Fragment>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/deporte' element={<Deporte/>}/>
        <Route path='/clima' element={<Clima/>}/>
     </Routes>
    </React.Fragment>
  );
}

export default App;
