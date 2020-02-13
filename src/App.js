import React, { useState } from 'react';
import StartGame from './components/StartGame'
import './App.css';
import QuestionScreen from './components/QuestionScreen'
import RoundStats from "./components/RoundStats"
import WelcomePage from "./components/WelcomePage"
import EndGameScreen from "./components/GameEndScreen"
import {
BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom'
import GameEndScreen from './components/GameEndScreen';

const playerData = require('./players.json')

function App() {
  const [ players ] = useState(playerData)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/start">
          <StartGame players={players}/>
        </Route>
        <Route path ="/question">
          <QuestionScreen />
        </Route>
        <Route path="/stats">
          <RoundStats players={players}/>
        </Route>
        <Route path="/end">
          <GameEndScreen players={players}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

