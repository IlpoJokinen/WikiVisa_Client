import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import CircleTimer from './UI/CircleTimer'
import Question from './UI/Question'
import Choices from './UI/Choices'
import ReadyCheckTable from './UI/ReadyCheckTable'
import io from 'socket.io-client'

const socket = io('http://localhost:3001')

const QuestionScreen = ({ timer, questions, gamertag, players }) => {
    const [ready, setReady] = useState(false)
    const [question, setQuestion] = useState({
        question_id: null, 
        title: "", 
        choices: []
    })
    const [answer, setAnswer] = useState(null)

    useEffect(() => {
        if(questions.length) {
            setQuestion(questions[0])
        }
    }, [])

    useEffect(() => {
        if(Number.isInteger(answer)) {
            submitAnswer()
        }
    }, [answer])

    function submitAnswer() {
        socket.emit("submit answer", {
            question_id: question.question_id,
            gamertag: gamertag,
            answer: answer,
        })
    }

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
                <Button variant="success" size="lg" onClick={() => setReady(true)} block>Ready</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <ReadyCheckTable players={players} gamertag={gamertag} ready={ready} />
            </Col>
        </Row>
    </Container>
}

export default QuestionScreen