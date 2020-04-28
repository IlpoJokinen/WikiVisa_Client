import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, ProgressBar} from 'react-bootstrap'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import CircleTimer from '../../components/UI/CircleTimer'
import Question from '../../components/UI/Question'
import Choices from '../../components/UI/Choices'
  
const QuestionScreen = ({ setAnswer, timer, question, players, setReady }) => {
    const [playersReady, setPlayersReady] = useState(0)
    const [disabled, setDisabled] = useState(false)
    document.title = question.title.toString()

    function clickReady() {
        setReady()
        setDisabled(true)
    } 
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
                <Choices disabled={disabled} setAnswer={setAnswer} choices={question.choices} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Button variant="success" size="lg" onClick={() => clickReady()} block>Ready</Button>
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