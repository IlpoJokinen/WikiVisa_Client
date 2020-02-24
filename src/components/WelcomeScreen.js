import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import PageTitle from './UI/PageTitle'
import { PlayFill, ArrowClockwise } from 'react-bootstrap-icons'
import io from 'socket.io-client'

const socket = io('http://localhost:3001')

const WelcomeScreen = ({ joiningState, joinGame }) => {
    const [gamertag, setGamertag] = useState("")

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
                        <Form.Control disabled={joiningState} size="lg" placeholder="Enter room code"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your gamertag</Form.Label>
                        <Form.Control disabled={joiningState} size="lg" placeholder="Enter your gamertag" onChange={(e) => setGamertag(e.target.value)}/>
                    </Form.Group>
                    <Button variant={joiningState ? "secondary" : "primary"} onClick={() => joinGame(gamertag)} type="button">
                        { joiningState ? <ArrowClockwise size={20} className="spin" /> : <PlayFill size={22} /> }
                        { joiningState ? " Joining game..." : " Join Game" }
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
}

export default WelcomeScreen