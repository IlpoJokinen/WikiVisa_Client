import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { Play, Tools } from 'react-bootstrap-icons'

const JoinOrCreateScreen = ({ setScreen }) => {
    return <Row>
        <Col className="text-center">
            <Button size="lg" block style={{marginRight: 16}} variant="primary" onClick={() => setScreen('JoinGame')}>
                <Play size={20} /> Join Game
            </Button>
        </Col>
        <Col>
            <Button size="lg" block variant="success" onClick={() => setScreen('CreateGame')}>
                <Tools size={20} /> Create Game
            </Button>
        </Col>
    </Row>
}

export default JoinOrCreateScreen