import React, {useState} from 'react'
import { Col, Row, Button, Form } from 'react-bootstrap'
import PageTitle from '../../UI/PageTitle'
import { ArrowLeft, ArrowClockwise, Check } from 'react-bootstrap-icons/'


const CreateGameScreen = ({setScreen, setRoomCode, creatingState, createGame}) => {
    const [gameProperties, setGameProperties] = useState({
        question: {
            categories: [],
            count: ""
        },
        counters: {
            answer: "",
            roundEnd: ""
        },
        visibility: false,
        losePoints: false
    })

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

    return <Row>
        <Col>
            <Form>
                <Row className="text-center">
                    <Col>
                        <PageTitle title="Setup your personal game" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Enter room code</Form.Label>
                            <Form.Control disabled={creatingState} size="lg" placeholder="Enter room code" onChange={e => setRoomCode(e.target.value)}/>
                            <Form.Text className="text-muted">
                                You can specify a room code or leave it empty to let us generate it for you
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6">
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
                    <Col xs="12" md="6">
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
                        <Form.Group>
                            <Form.Label>Lose Points On Incorrect Answer</Form.Label>
                            <Form.Check 
                                type="switch"
                                id="losePoints-switch"
                                label={'Player will ' + (gameProperties.losePoints ? '' : 'not') + ' lose points'}
                                checked={gameProperties.losePoints}
                                onChange={e => setGameProperties({...gameProperties, losePoints: !gameProperties.losePoints})}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Visibility</Form.Label>
                            <Form.Check 
                                type="switch"
                                id="visibility-switch"
                                label={'Game will be ' + (gameProperties.visibility ? 'public' : 'private')}
                                checked={gameProperties.visibility}
                                onChange={e => setGameProperties({...gameProperties, visibility: !gameProperties.visibility})}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs="auto">
                        <Button onClick={() => setScreen('JoinOrCreate')} type="button">
                            <ArrowLeft size={20} /> Return
                        </Button>
                    </Col>
                    <Col className="text-right">
                        <Button variant={creatingState ? "secondary" : "success"} onClick={() => createGame(gameProperties)} type="button">
                            { creatingState ? <ArrowClockwise size={20} className="spin" /> : <Check size={20} /> }
                            { creatingState ? " Creating game..." : " Create & Join" }
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Col>
    </Row>
}

export default CreateGameScreen