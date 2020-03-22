import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import CircleTimer from './UI/CircleTimer'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import PageTitle from './UI/PageTitle'
import Player from './UI/Player'

const StartScreen = ({ gamertag, players, timer, roomCode, startGame, started, isCreator }) => {
    let allPlayers = "" 
    
    if(players.length) {
        allPlayers = players.map(player => {
            return <Player key={player.id} gamertag={player.gamertag} thisPlayersTag={gamertag === player.gamertag}/>  
        })
    }
    return <Container>   
        <Row>
            <Col>
                <PageTitle title={`Room ${roomCode}`}/>
            </Col>
        </Row>
        {isCreator && !started
        ? <Row>
            <Button variant="success" onClick={() => { startGame() }}>
                Start game
            </Button>
        </Row>
        : null
        }
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
            {started
            ? <Col>
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
            : null
            }
            
        </Row>
    </Container>
    
}

export default StartScreen