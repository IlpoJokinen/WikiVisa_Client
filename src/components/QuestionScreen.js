import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, ProgressBar} from 'react-bootstrap'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import CircleTimer from './UI/CircleTimer'
import Question from './UI/Question'
import Choices from './UI/Choices'

const QuestionScreen = ({ setAnswer, timer, questions, gamertag, players, setReady }) => {
    const [playersReady, setPlayersReady] = useState(0)

    const [question, setQuestion] = useState({
        question_id: null, 
        title: "", 
        choices: []
    })

    useEffect(() => {
        if(questions.length) {
            setQuestion(questions[0])
        }
    }, [])

    useEffect(() => {
        let num = players.filter(p => p.ready === true).length
        setPlayersReady(num)
    }, [players])

    return <Container>
        <Row>
            <Col>
                <CountdownCircleTimer
                    isPlaying
                    durationSeconds={parseInt(timer)}
                    colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                    renderTime={CircleTimer}
                />
            </Col>
        </Row>
        <Row>
            <Col>
                <Question question={question.title} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Choices setAnswer={setAnswer} choices={question.choices} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Button variant="success" size="lg" onClick={() => setReady()} block>Ready</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <Row>
                    <Col>
                        <h4 className="text-center">{`${playersReady} / ${players.length} have answered`}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProgressBar animated now={parseInt(playersReady)} max={parseInt(players.length)} min={0}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
}

export default QuestionScreen