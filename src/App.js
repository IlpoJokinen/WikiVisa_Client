import React, { useState } from 'react';
import StartGame from './components/StartGame'
import './App.css';
import QuestionScreen from './components/QuestionScreen'
import RoundStats from "./components/RoundStats"
import WelcomePage from "./components/WelcomePage"
import {
BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom'
import GameEndScreen from './components/GameEndScreen';
import io from 'socket.io-client'

const socket = io('http://localhost:3001')
const playerData = require('./players.json')

function App() {
  const [ players ] = useState(playerData)

  useEffect(() => {
    socket.on('someoneClicked', (data) => {
      console.log(data)
    })

    socket.on('senderConfirmation', (data) => {
      console.log(data)
    })
  })

  const pingConnectedNodes = (event) => {
    event.preventDefault()
    const message = 'Someone clicked...'
    socket.emit('click', message)
  }
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