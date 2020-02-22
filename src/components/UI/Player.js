import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../../style.css'

const Player = ({ gamertag, thisPlayersTag }) => {
    return <Row>
        <Col>
            <div className="gamerTag">
                {
                    thisPlayersTag ? <b>{gamertag}</b> : gamertag
                }
            </div>
        </Col>
    </Row>
}

export default Player