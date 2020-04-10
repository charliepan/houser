import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Wizard from './Components/Wizard';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
      <Wizard/>
    </div>
  );
}

export default App;
