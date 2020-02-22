import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import CircleTimer from './UI/CircleTimer'
import Question from './UI/Question'
import Choices from './UI/Choices'
import io from 'socket.io-client'

const socket = io('http://localhost:3001')

const QuestionScreen = ({questionCounter, players}) => {
    const [question, setQuestion] = useState('')
    const [choices, setChoices] = useState([])

    useEffect(() => {
        socket.emit('get question', () => {
            console.log('Getting question...')
        })
        socket.on('send question', (data) => {
            setQuestion(data.question)
            setChoices(data.choices)
        })
        if(questionCounter === -1){
            window.location.href = "/stats" 
        }
        
    }, [questionCounter])
    

    return <Container>
        <Row>
            <Col>
                <CountdownCircleTimer
                    isPlaying
                    durationSeconds={20}
                    colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                    renderTime={CircleTimer}
                    onComplete={() => [true, 1000]}
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
                <Choices choices={choices} />
            </Col>
        </Row>
    </Container>
}

export default QuestionScreen