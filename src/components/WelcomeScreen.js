import React, { useState } from 'react'
import { Container, Row, Alert, Col, Button, Form } from 'react-bootstrap'
import PageTitle from './UI/PageTitle'
import { Play, ArrowLeft, Tools, ArrowClockwise, Check } from 'react-bootstrap-icons/'

const WelcomeScreen = ({ joiningState, joinGame, createGame, creatingState }) => {
    const [roomCode, setRoomCode] = useState("")
    const [gamertag, setGamertag] = useState("")
    const [gameProperties, setGameProperties] = useState({
        question: {
            categories: [],
            count: ""
        },
        counters: {
            answer: "",
            roundEnd: ""
        }
    })
    const [showCreatePage, setShowCreatePage] = useState(false)

    const roomCodeBlock = () => {
        return <Form.Group>
            <Form.Label>Enter room code</Form.Label>
            <Form.Control disabled={joiningState} size="lg" placeholder="Enter room code" onChange={e => setRoomCode(e.target.value)}/>
            <Form.Text className="text-muted">
               You can specify a room code or leave it empty to let us generate it for you
            </Form.Text>
        </Form.Group>
    }

    const gamertagBlock = () => {
        return <Form.Group>
            <Form.Label>Enter your gamertag</Form.Label>
            <Form.Control disabled={joiningState} size="lg" placeholder="Enter your gamertag" onChange={e => setGamertag(e.target.value)}/>
            <Form.Text className="text-muted">
                You can specify a gamertag or leave it empty to let us generate it for you (it will be boring)
            </Form.Text>
        </Form.Group>
    }

    const actionButton = () => {
        return showCreatePage 
        ? <Button style={{marginRight: 16}} variant={creatingState ? "secondary" : "success"} onClick={() => createGame(gamertag, roomCode, gameProperties)} type="button">
            { creatingState ? <ArrowClockwise size={20} className="spin" /> : <Check size={20} /> }
            { creatingState ? " Creating game..." : " Create & Join" }
        </Button> 
        : <Button style={{marginRight: 16}} variant={joiningState ? "secondary" : "success"} onClick={() => joinGame(gamertag, roomCode)} type="button">
            { joiningState ? <ArrowClockwise size={20} className="spin" /> : <Play size={20} /> }
            { joiningState ? " Joining game..." : " Join Game" }
        </Button> 
    }

    const backButton = () => {
        return <Button type="button" onClick={() => setShowCreatePage(false)}>
            <ArrowLeft size={20} /> Return
        </Button> 
    }

    const openCreateGameButton = () => {
        return <Button type="button" onClick={() => setShowCreatePage(true)}>
            <Tools size={20} /> Create Game
        </Button> 
    }

    const joinGameScreen = () => {
        return <Form>
            <Alert variant="warning">
                <Alert.Heading>Welcome to WikiVisa</Alert.Heading>
                <p>You can join specific game by clicking "Join Game" button or you can create games by clicking the "Create Game"</p>
            </Alert>
            { roomCodeBlock() }
            { gamertagBlock() }
            { actionButton() }
            { openCreateGameButton() }
        </Form>
    }

    const addToSelectedCategories = event => {
        let options = event.target.options,
            selected = []
        for(let i = 0; i < options.length; i++) {
            if(options[i].selected) {
                selected.push(options[i].value)
            }
        }
        setGameProperties(prevState => ({...prevState, question: {...prevState.question, categories: selected}}))
    }

    const createGameScreen = () => {
        return <Form>
            <Alert variant="warning">
                <Alert.Heading>Welcome to WikiVisa</Alert.Heading>
                <p>You can join specific game by clicking "Join Game" button or you can create games by clicking the "Create Game"</p>
            </Alert>
            { roomCodeBlock() }
            { gamertagBlock() }
            <h3>Game Setup</h3>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Question categories</Form.Label>
                        <Form.Group controlId="createGameForm.categorySelect" onChange={e => addToSelectedCategories(e)}>
                            <Form.Control disabled={creatingState} as="select" multiple>
                                <option value="capital">Capital</option>
                                <option value="officialLanguage">Country Language</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Text className="text-muted">
                            Select question categories for your game. Hold Ctrl if you want to select multiple categories!
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Question count</Form.Label>
                        <Form.Control disabled={creatingState} size="lg" placeholder="Default: 5 questions" onChange={e => setGameProperties({...gameProperties, question: {...gameProperties.question, count: e.target.value }})} />
                        <Form.Text className="text-muted">
                            How many questions do you want answer?
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Answer time</Form.Label>
                        <Form.Control disabled={creatingState} size="lg" placeholder="Default: 10 seconds" onChange={e => setGameProperties({...gameProperties, counters: {...gameProperties.counters, answer: e.target.value }})} />
                        <Form.Text className="text-muted">
                            This is the answering time for each question
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Round end timer</Form.Label>
                        <Form.Control disabled={creatingState} size="lg" placeholder="Default: 10 seconds" onChange={e => setGameProperties({...gameProperties, counters: {...gameProperties.counters, roundEnd: e.target.value }})} />
                        <Form.Text className="text-muted">
                            This is the timer for downtime between each question showing correct answers
                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            { actionButton() }
            { backButton() }
        </Form>
    }

    return <Container>
        <Row>
            <Col>
                <PageTitle title="WikiVisa" />
            </Col>
        </Row>
        <Row>
            <Col>
                { showCreatePage ? createGameScreen() : joinGameScreen() }
            </Col>
        </Row>
    </Container>
}

export default WelcomeScreen