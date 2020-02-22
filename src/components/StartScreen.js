import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CircleTimer from './UI/CircleTimer'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import PageTitle from './UI/PageTitle'
import Player from './UI/Player'

const StartScreen = ({ gamertag, players, timer }) => {
    let allPlayers = "" 
    
    if(players.length) {
        allPlayers = players.map(player => {
            return <Player key={player.id} gamertag={player.gamertag} thisPlayersTag={gamertag === player.gamertag}/>  
        })
    }

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
                <Row>
                    <Col>
                        <CountdownCircleTimer
                            isPlaying
                            durationSeconds={parseInt(timer)}
                            colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                            renderTime={CircleTimer}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    
}

export default StartScreen