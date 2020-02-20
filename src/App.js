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

    useEffect(() => {
        socket.on('someoneClicked', (data) => {
            console.log(data)
        })

        
        socket.on('senderConfirmation', (data) => {
            console.log(data)
        })

        socket.emit("get players")

        socket.on("send players", (data) => {
            setPlayers(data)
        })
    }, [])



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
                            <StartScreen players={players} />
                        </Route>
                        <Route path ="/question">
                            <QuestionScreen />
                        </Route>
                        <Route path="/stats">
                            <RoundEndScreen players={players} />
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