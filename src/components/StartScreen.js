import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import PageTitle from './UI/PageTitle'
import Player from './UI/Player'
import CircleTimer from './UI/CircleTimer'
import { withRouter } from "react-router-dom"

const StartScreen = ({ gamertag, players, startGameCounter, history }) => {
    let allPlayers = ''
    useEffect(() => {
        if(startGameCounter === -1){
            history.push("/question")
        }
        
    }, [startGameCounter])
    
    if(players) {
        allPlayers = players.map(player => {
            return  <Player key={player.id} gamertag={player.gamertag} thisPlayersTag={gamertag === player.gamertag}/>  
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
                    <CountdownCircleTimer
                        isPlaying
                        durationSeconds={20}
                        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                        renderTime={CircleTimer}
                        onComplete={() => [true, 1000]}
                    />
                </Row>
            </Col>
        </Row>
    </Container>
    
}

export default withRouter(StartScreen)