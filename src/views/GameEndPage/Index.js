import React from 'react'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import PageTitle from '../../components/UI/PageTitle'
import StatsTable from '../../components/UI/StatsTable'

const GameEndScreen = ({ gamertag, players }) => {
    let winner = players.reduce((prev, current) => (prev.points > current.points) ? prev : current)
    document.title = gamertag === winner.gamertag ? 'Congratulations!' : 'Better Luck Next Time!'
    return <Container>
        <Row>
            <Col>
                <PageTitle title="End Stats" />
            </Col>
        </Row>
        <Row>
            <Col>
                <StatsTable gamertag={gamertag} players={players}/>
            </Col>
        </Row>
        <Row>
            <Col className="text-center">
                <ButtonGroup className="buttons" size="lg">
                    <Button href="/" variant="outline-dark">Return to FrontPage</Button>
                    <Button variant="success">Play Again</Button>
                </ButtonGroup>
            </Col>
        </Row>
    </Container>
}

export default GameEndScreen