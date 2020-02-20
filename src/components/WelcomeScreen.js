import React, {useState} from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import PageTitle from './UI/PageTitle'

const WelcomeScreen = ({joinGame}) => {

    const [gamertag, setGamertag] = useState("")

    const onChange = (e) => {
        e.preventDefault()
        setGamertag(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(gamertag.length){
            joinGame({gamertag})
            window.location.href = "/start"
        } else {
            window.alert("Please enter gamertag")
        }
        
    }

    return <Container>
        <Row>
            <Col>
                <PageTitle title="Welcome" />
            </Col>
        </Row>
        <Row>
            <Col>
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Enter room code <sup>*</sup></Form.Label>
                        <Form.Control size="lg" placeholder="Enter room code"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your gamertag</Form.Label>
                        <Form.Control size="lg" placeholder="Enter your gamertag" onChange={(e) =>onChange(e)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Join</Button>
                </Form>
            </Col>
        </Row>
    </Container>
}


export default WelcomeScreen