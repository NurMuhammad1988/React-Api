import './App.css';
import * as React from 'react';
import Create from './Components/Create'
import 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <Create />
    </div>

  );
}

export default App;
