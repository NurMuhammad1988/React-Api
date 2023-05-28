import './App.css';
import React from 'react';
import Create from './Components/Create'
import Read from './Components/Read'
import Update from './Components/Update'
import 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Aos from "aos"
import 'aos/dist/aos.css';

function App() {
  Aos.init();
 
  return (

    <Router>

      <div className="main">
        <h2 data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="main-header">React Crud Operations</h2>
        <Routes>
          <Route exact path='/' element={<Create />} />
          <Route exact path='/read' element={<Read />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </div>
    </Router>



  );
}

export default App;
