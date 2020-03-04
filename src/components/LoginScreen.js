import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import PageTitle from './UI/PageTitle'

const LoginScreen = () => {

    return <Container>
        <Row>
            <Col>
                <PageTitle title="Login" />
            </Col>
        </Row>
        <Row>
            <Col>
                <Form>
                    <Form.Group>
                        <Form.Label>Enter username</Form.Label>
                        <Form.Control placeholder="Username"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter password</Form.Label>
                        <Form.Control placeholder="Password"/>
                    </Form.Group>
                    <Button>Login</Button>
                </Form>
            </Col>
        </Row>
    </Container>
}

export default LoginScreen