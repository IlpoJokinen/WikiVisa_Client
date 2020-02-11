import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Question from './UI/Question'
import Choices from './UI/Choices'

const Counter = () => {
    const [counter, setCounter ] = useState(30)
    let counterTime = setTimeout(() => setCounter(counter - 1), 1000)
    
    if(counter === 0) {
        clearTimeout(counterTime)
        window.location.href = "/stats"
    }

    return <h1 className="text-center">{ counter }</h1>
}

const QuestionScreen = () => {
    const question = "Mikä on Suomen pääkaupunki",
        choices = ["Helsinki", "Tukholma", "Montreal", "Timbuktu"]
    return <Container>
        <Row>
            <Col>
                <Counter />
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