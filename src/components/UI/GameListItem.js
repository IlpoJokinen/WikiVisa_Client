import React from 'react'
import { Row, Col, Button, ListGroup, Badge } from 'react-bootstrap'

const GameListItem = ({ game, joinGame }) => {
   
    return <ListGroup.Item>
        <Row>
            <Col sm="auto">
                <Badge pill variant="primary">
                    { game.currentPlayers }/{ game.maxPlayers }
                </Badge>
            </Col>
            <Col>{ game.roomCode }</Col>
            <Col>{ game.categories[0] }</Col>
            <Col sm="auto">
                <Button size="sm" variant="success" onClick={() => joinGame(game.roomCode)}>Join</Button>
            </Col>
        </Row>
    </ListGroup.Item>
}

export default GameListItem