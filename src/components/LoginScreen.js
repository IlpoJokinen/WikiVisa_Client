import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import PageTitle from './UI/PageTitle'


const LoginScreen = ({ loggingState, createUser}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const message = () => {
        alert("Logged in as " +username)
    }
    

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
                        <Form.Label id="usernamelabel">Enter username</Form.Label>
                        <Form.Control id="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="passwordlabel">Enter password</Form.Label>
                        <Form.Control id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button id='loginbutton' variant={loggingState ? "secondary" : "primary"} type="button" onClick={message}  >         
                        { loggingState ? " Logging in..." : " Login" }
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
}

export default LoginScreen