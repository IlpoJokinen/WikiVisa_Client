import React, {useState} from 'react'
import FindGameModal from '../../modals/FindGameModal'
import { Col, Row, Button, Form, ButtonGroup  } from 'react-bootstrap'
import PageTitle from '../../UI/PageTitle'
import { PlayFill, ArrowLeft, Search } from 'react-bootstrap-icons'

const JoinGameScreen = ({ setScreen, setRoomCode, roomCode, joiningState, joinGame, getPublicGames, publicGames }) => {
    const [modalVisibility, setModalVisibility] = useState(false)
    
    return <Row>
        <FindGameModal setModalVisibility={setModalVisibility} visibility={modalVisibility} getPublicGames={getPublicGames} publicGames={publicGames} />
        <Col>
            <Row className="text-center">
                <Col>
                    <PageTitle title="Enter Room Code or Find Game" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Enter room code</Form.Label>
                        <Form.Control disabled={joiningState} size="lg" placeholder="Provide room code" onChange={e => setRoomCode(e.target.value)}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col xs="auto">
                    <Button onClick={() => setScreen('JoinOrCreate')} type="button">
                        <ArrowLeft size={20} /> Return
                    </Button>
                </Col>
                <Col className="text-right">
                    <ButtonGroup>
                        <Button variant="secondary" onClick={() => setModalVisibility(true)} type="button">
                            <Search size={20} /> Find Game
                        </Button>
                        <Button disabled={!roomCode.length} onClick={() => joinGame(roomCode)} type="button">
                            <PlayFill size={20} /> Join Room
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </Col>
    </Row>
}

export default JoinGameScreen