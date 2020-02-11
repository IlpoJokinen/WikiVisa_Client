import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import PageTitle from './UI/PageTitle'

const WelcomeScreen = () => {
    return <Container>
        <Row>
            <Col>
                <PageTitle title="Welcome" />
            </Col>
        </Row>
        <Row>
            <Col>
                <Form>
                    <Form.Group>
                        <Form.Label>Enter room code <sup>*</sup></Form.Label>
                        <Form.Control size="lg" placeholder="Enter room code"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your gamertag</Form.Label>
                        <Form.Control size="lg" placeholder="Enter your gamertag"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" href="/start">Join</Button>
                </Form>
            </Col>
        </Row>
    </Container>
}

export default WelcomeScreen