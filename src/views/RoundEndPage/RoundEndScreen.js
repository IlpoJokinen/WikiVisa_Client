import React from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import CircleTimer from '../../components/UI/CircleTimer'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import RoundStatsTable from '../../components/UI/RoundStatsTable'
import PageTitle from '../../components/UI/PageTitle'

const RoundEndScreen = ({ correctAnswer, gamertag, answers, timer }) => {
    document.title = 'Correct Answers'
    return <Container>
        <Row>
            <Col>
                <PageTitle title="Round Statistics" />
            </Col>
        </Row>
        <Row>
            <Col className="text-center">
                {correctAnswer.value === answers[gamertag].value 
                ? <p>Your answer was <span className="green">correct</span></p>
                : <p>Your answer <span className="bold">{answers[gamertag].name}</span> was <span className="red">incorrect</span></p>
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <h3 className="text-center">{correctAnswer.answerTitle} <Badge variant="success">{correctAnswer.name}</Badge></h3> 
            </Col>
        </Row>
        <Row>
            <Col>
                <RoundStatsTable correctAnswer={correctAnswer} gamertag={gamertag} answers={answers} />
            </Col>
        </Row>
        <Row>
            <Col>
            <Row>
                <CountdownCircleTimer
                    isPlaying
                    durationSeconds={parseInt(timer)}
                    colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                    renderTime={CircleTimer}
                />
                </Row>
            </Col>
        </Row>
    </Container>
}

export default RoundEndScreen