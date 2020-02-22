import React, { useState, useEffect } from 'react'
import { Alert, Container, Row, Col, Badge } from 'react-bootstrap'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import RoundStatsTable from './UI/RoundStatsTable'
import PageTitle from './UI/PageTitle'
import CircleTimer from './UI/CircleTimer'

const RoundEndScreen = ({ players, roundEndCounter }) => {

    useEffect(() => {
        if(roundEndCounter === -2){
            window.location.href = "/end" 
        }
    }, [roundEndCounter])

    return <Container>
        <Row>
            <Col>
                <PageTitle title="Round Statistics" />
            </Col>
        </Row>
        <Row>
            <Col>
                <RoundStatsTable players={players}/>
            </Col>
        </Row>
        <Row>
            <Col>
                <h4 className="text-center">Correct answer <Badge variant="success">A</Badge></h4>
            </Col>
        </Row>
        <Row>
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

export default RoundEndScreen