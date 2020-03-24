import React from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import PageTitle from '../../UI/PageTitle'

const GamertagScreen = ({ setScreen, setGamertag, gamertag }) => {
    return <Row>
        <Col>
            <Form>
                <Row className="text-center">
                    <Col>
                        <PageTitle title="Give Gamertag" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control size="lg" className="text-center" onChange={e => setGamertag(e.target.value)} placeholder="Provide gamertag" />
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <Button block disabled={!gamertag.length} variant="success" onClick={() => setScreen('JoinOrCreate')}>Next</Button>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <Button block variant="link" onClick={() => setScreen('JoinOrCreate')}>Randomize name</Button>
                    </Col>
                </Row>
            </Form>
        </Col>
    </Row>
}

export default GamertagScreen