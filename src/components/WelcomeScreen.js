import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import PageTitle from './UI/PageTitle'
import { PlayFill, ArrowClockwise } from 'react-bootstrap-icons'

const WelcomeScreen = ({ joiningState, joinGame, createGame, creatingState }) => {
    const [gamertag, setGamertag] = useState("")
    const [roomCode, setRoomCode] = useState('')

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
                        <Form.Label id='roomcodelabel'>Enter room code <sup>*</sup></Form.Label>
                        <Form.Control id='roomcode' disabled={joiningState} size="lg" placeholder="Enter room code" onChange={(e) => setRoomCode(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id='gamertaglabel'>Enter your gamertag</Form.Label>
                        <Form.Control id='gamertag' disabled={joiningState} size="lg" placeholder="Enter your gamertag" onChange={(e) => setGamertag(e.target.value)}/>
                    </Form.Group>
                    <Button id='joingamebutton' style={{marginRight: 16}}variant={joiningState ? "secondary" : "primary"} onClick={() => joinGame(gamertag, roomCode)} type="button">
                        { joiningState ? <ArrowClockwise size={20} className="spin" /> : <PlayFill size={22} /> }
                        { joiningState ? " Joining game..." : " Join Game" }
                    </Button>
                    <Button id='creategamebutton' variant={creatingState ? "secondary" : "primary"} onClick={() => createGame(gamertag, roomCode)} type="button">
                        { creatingState ? <ArrowClockwise size={20} className="spin" /> : <PlayFill size={22} /> }
                        { creatingState ? " Creating game..." : " Create Game" }
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
}

export default WelcomeScreen