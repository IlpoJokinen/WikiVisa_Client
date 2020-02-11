import React, { useState, useEffect } from 'react'
import { Alert, Container, Row, Col, Badge } from 'react-bootstrap'
import RoundStatsTable from './UI/RoundStatsTable'
import PageTitle from './UI/PageTitle'

const RoundEndScreen = ({ players }) => {
    const [timer, setTimer] = useState(20)

    useEffect(() => {
        setTimeout(() => {
            timer === 0 ? window.location.href = "/end" : setTimer(timer - 1)
        }, 1000)
    }, [timer])

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
                <Alert variant="info">
                    Next round starts in { timer } seconds
                </Alert>
            </Col>
        </Row>
    </Container>
}

export default RoundEndScreen