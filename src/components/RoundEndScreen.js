import React, { useState, useEffect } from 'react'
import { Alert, Container, Row, Col, Badge } from 'react-bootstrap'
import RoundStatsTable from './UI/RoundStatsTable'
import PageTitle from './UI/PageTitle'
import { withRouter } from "react-router-dom"

const RoundEndScreen = ({ gamertag, players, history }) => {
    const [timer, setTimer] = useState(20)

    useEffect(() => {
        setTimeout(() => {
            timer === 0 ? history.push("/end") : setTimer(timer - 1)
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
                <RoundStatsTable gamertag={gamertag} players={players}/>
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

export default withRouter(RoundEndScreen)