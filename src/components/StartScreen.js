import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PageTitle from './UI/PageTitle'
import Player from './UI/Player'

const StartScreen = ({ players }) => {
    const [timer, setTimer] = useState(20)

    useEffect(() => {
        setTimeout(() => {
            timer === 0 ? window.location.href = "/question" : setTimer(timer - 1)
        }, 1000)
        
    }, [timer])

    const allPlayers = players.map(player => {
        return <Player key={player.id} gamertag={player.gamertag} />
    })


    console.log(players)
    return <Container>   
        <Row>
            <Col>
                <PageTitle title="Room X" />
            </Col>
        </Row>
        <Row>
            <Col>
                <Row>
                    <Col>
                        <h4>Players in the game room</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        { allPlayers }
                    </Col>
                </Row>
            </Col>
            <Col>
                <h6>The game will start in <b>{ timer }</b> seconds</h6>
            </Col>
        </Row>
    </Container>
    
}

export default StartScreen