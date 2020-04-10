import React from 'react';
import './App.css';
// import Dashboard from './Components/Dashboard';
// import Wizard from './Components/Wizard';
import Header from './Components/Header';
import { HashRouter as Router } from 'react-router-dom'
import routes from './routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        {routes}
      </div>
    </Router>
  );
}

export default App;
