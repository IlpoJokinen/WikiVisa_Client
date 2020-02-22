import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import WelcomeScreen from './components/WelcomeScreen' 
import StartScreen from './components/StartScreen'
import QuestionScreen from './components/QuestionScreen'
import RoundEndScreen from './components/RoundEndScreen'
import GameEndScreen from './components/GameEndScreen'
import io from 'socket.io-client'
import './App.css'
import './style.css'

const socket = io('http://localhost:3001')

function App() {
    const [ players, setPlayers ] = useState()
    const [game, setGame] = useState({})

    useEffect(() => {
       
        socket.emit("get players")

        socket.on("send players", (data) => {
            setPlayers(data)
        })

        socket.on("send game", (game) => {
            setGame(game)
        })
        
        socket.on("send startTimer", (timer) => {
            setGame({...game, startGameCounter: timer})
        }) 
        socket.on("send questionTimer", (timer) => {
            setGame({...game, questionCounter: timer})
        }) 
        socket.on("send roundEndTimer", (timer) => {
            setGame({...game, roundEndCounter: timer})
        }) 
    },[])



    function joinGame(gamertag) {
        socket.emit("join game", gamertag)
    }

    return <Container className="wrapper" fluid>
        <Row>
            <Col>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <WelcomeScreen joinGame={joinGame} />
                        </Route>
                        <Route path="/start">
                            <StartScreen players={players} startGameCounter={game.startGameCounter}/>
                        </Route>
                        <Route path ="/question">
                            <QuestionScreen players={players} questionCounter={game.questionCounter}/>
                        </Route>
                        <Route path="/stats">
                            <RoundEndScreen players={players} roundEndCounter={game.roundEndCounter}/>
                        </Route>
                        <Route path="/end">
                            <GameEndScreen players={players} />
                        </Route>
                    </Switch>
                </Router>
            </Col>
        </Row>
    </Container>
}

export default App