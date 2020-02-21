import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import CircleTimer from './UI/CircleTimer'
import Question from './UI/Question'
import Choices from './UI/Choices'
import io from 'socket.io-client'
import { withRouter } from "react-router-dom"
import ReadyCheckTable from './UI/ReadyCheckTable'

const socket = io('http://localhost:3001')

const QuestionScreen = ({questionCounter,history, gamertag, players}) => {
    const [question, setQuestion] = useState('')
    const [choices, setChoices] = useState([])
    const [ready, setReady] = useState(false)
    useEffect(() => {
        socket.emit('get question', () => {
            console.log('Getting question...')
        })
        socket.on('send question', (data) => {
            setQuestion(data.question)
            setChoices(data.choices)
        })
        if(questionCounter === -2){
            history.push("/stats")
        }
    }, [questionCounter])
    function imReady() {
        setReady(true)
    } 
    return <Container>
        <Row>
            <Col>
                <CountdownCircleTimer
                    isPlaying
                    durationSeconds={20}
                    colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                    renderTime={CircleTimer}
                />
            </Col>
        </Row>
        <Row>
            <Col>
                <Question question={question} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Choices choices={choices}/>
            </Col>
        </Row>
        <Row>
            <Col>
                <Button variant="success" size="lg" onClick={imReady} block>Ready</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <ReadyCheckTable imReady={imReady} players={players} gamertag={gamertag} ready={ready}/>
            </Col>
        </Row>
    </Container>
}

export default withRouter(QuestionScreen)