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
    const [ players, setPlayers ] = useState([])

    useEffect(() => {
        socket.on('someoneClicked', (data) => {
            console.log(data)
        })

        socket.on('senderConfirmation', (data) => {
            console.log(data)
        })

        socket.on("dummyData", (data) => {
            setPlayers(data)
        })
    })

    const pingConnectedNodes = (event) => {
        event.preventDefault()
        const message = 'Someone clicked...'
        socket.emit('click', message)
    }

    return <Container className="wrapper" fluid>
        <Row>
            <Col>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <WelcomeScreen />
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