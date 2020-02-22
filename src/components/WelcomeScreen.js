import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import PageTitle from './UI/PageTitle'
import { PlayFill, ArrowClockwise } from 'react-bootstrap-icons'


const WelcomeScreen = ({ joinGame }) => {

    const [gamertag, setGamertag] = useState("")
    const [joining, setJoining] = useState(null)

    const startJoining = () => {
        setJoining(true)
        joinGame(gamertag)
    }

    return <Container>
        <Row>
            <Col>
                <PageTitle title="Welcome" />
            </Col>
        </Row>
        <Row>
            <Col>
                <Form>
                    <Form.Group>
                        <Form.Label>Enter room code <sup>*</sup></Form.Label>
                        <Form.Control disabled={joining} size="lg" placeholder="Enter room code"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your gamertag</Form.Label>
                        <Form.Control disabled={joining} size="lg" placeholder="Enter your gamertag" onChange={(e) => setGamertag(e.target.value)}/>
                    </Form.Group>
                    <Button variant={joining ? "secondary" : "primary"} onClick={() => startJoining()} type="button">
                        { joining ? <ArrowClockwise size={20} className="spin" /> : <PlayFill size={20} /> }
                        { joining ? " Joining game..." : " Join Game" }
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
}

export default WelcomeScreen