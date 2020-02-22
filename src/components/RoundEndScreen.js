import React, { useEffect } from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import CircleTimer from './UI/CircleTimer'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import RoundStatsTable from './UI/RoundStatsTable'
import PageTitle from './UI/PageTitle'
import io from 'socket.io-client'

const socket = io('http://localhost:3001')

const RoundEndScreen = ({ correctAnswer, gamertag, players, timer }) => {
    return <Container>
        <Row>
            <Col>
                <PageTitle title="Round Statistics" />
            </Col>
        </Row>
        <Row>
            <Col>
                <RoundStatsTable gamertag={gamertag} players={players}/>
            </Col>
        </Row>
        <Row>
            <Col>
                <h4 className="text-center">Correct answer <Badge variant="success">{ correctAnswer }</Badge></h4>
            </Col>
        </Row>
        <Row>
            <Col>
            <Row>
                <CountdownCircleTimer
                    isPlaying
                    durationSeconds={parseInt(timer)}
                    colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                    renderTime={CircleTimer}
                />
                </Row>
            </Col>
        </Row>
    </Container>
}

export default RoundEndScreen