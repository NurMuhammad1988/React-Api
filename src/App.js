import './App.css';
import React from 'react';
import Create from './Components/Create'
import Read from './Components/Read'
import Update from './Components/Update'
import 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (

    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
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
