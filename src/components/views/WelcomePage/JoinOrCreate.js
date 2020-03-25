import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import PageTitle from '../../UI/PageTitle'
import { Play, Tools } from 'react-bootstrap-icons'

const JoinOrCreateScreen = ({ setScreen }) => {
    document.title = 'Format Game'
    return <Row>
        <Col>
            <Row className="text-center">
                <Col>
                    <PageTitle title="Join or Create a game" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button size="lg" block variant="primary" onClick={() => setScreen('JoinGame')}>
                        <Play size={20} /> Join Game
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button size="lg" block variant="success" onClick={() => setScreen('CreateGame')}>
                        <Tools size={20} /> Create Game
                    </Button>
                </Col>
            </Row>
        </Col>
    </Row>
}

export default JoinOrCreateScreen