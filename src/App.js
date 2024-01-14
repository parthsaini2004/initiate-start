

import './App.css';
import Homepage from '../src/components/Homepage/Homepage.jsx';

import React, { useState } from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Try from './components/try/try.jsx';
import Student from './components/student/student.jsx';
import Data from './components/data/data.jsx'
function App() {
  // const [showButton, setShowButton] = useState(false);

  // function handleMouseMove(event) {
  //   const mouseY = event.clientY;
  //   const viewportHeight = window.innerHeight;
  //   const threshold = viewportHeight * 0.6;
  //   setShowButton(mouseY > threshold);
  // }


  return (
   
   
   
   <Router>
   <Navbar />
   <Data />
   {/* <Try /> */}
   {/* <Student /> */}
       {/* <div onMouseMove={handleMouseMove}>
      {showButton && <button>Click me</button> }
    </div> */}
    
    <Routes>
      <Route path="/" element={<Homepage />} />
      
      
    </Routes>
   
   </Router>
   
  );
}

export default App;
