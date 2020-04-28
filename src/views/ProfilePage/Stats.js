import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Stats = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <Card border='success' style={{width: '18rem'}}>
                        <Card.Header>Games Played</Card.Header>
                        <Card.Body>
                            <Card.Title>0</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border='success' style={{width: '18rem'}}>
                        <Card.Header>Winrate</Card.Header>
                        <Card.Body>
                            <Card.Title>0%</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Stats