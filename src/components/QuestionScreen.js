import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Question from './UI/Question'
import Choices from './UI/Choices'
import io from 'socket.io-client'
import { withRouter } from "react-router-dom"
const socket = io('http://localhost:3001')



const Counter = ({history}) => {
    const [counter, setCounter ] = useState(30)
    let counterTime = setTimeout(() => setCounter(counter - 1), 1000)
    
    if(counter === 0) {
        clearTimeout(counterTime)
        history.push("/stats")
    }

    return <h1 className="text-center">{ counter }</h1>
}

const QuestionScreen = (props) => {
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
    }, [])

    return <Container>
        <Row>
            <Col>
                <Counter history={props.history}/>
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

export default withRouter(QuestionScreen)