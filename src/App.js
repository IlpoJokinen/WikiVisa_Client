import React, { useState } from 'react';
import StartGame from './components/StartGame'
import './App.css';
import RoundStats from "./components/RoundStats"

const playerData = require('./players.json')

function App() {
  const [ players ] = useState(playerData)
  

  return (
    <div className="App">
      <h3>OOO</h3>
    </div>
  );
}

export default App;
