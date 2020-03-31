import React from 'react'
import GameList from '../UI/GameList'
import { Modal, Button } from 'react-bootstrap'
import { ArrowClockwise } from 'react-bootstrap-icons'

const FindGameModal = ({setModalVisibility, visibility, getPublicGames, publicGames, joinGame}) => {
    return <Modal className="findGameModal" show={visibility} size="md" centered>
        <Modal.Header>
            <Modal.Title>
                Find Game
            </Modal.Title>
            <Button size="sm" className="findGameModalRefreshBtn" onClick={() => getPublicGames()} variant="light">
                <ArrowClockwise size="18" /> Refresh List 
            </Button>
        </Modal.Header>
        <Modal.Body>
            <GameList 
                getPublicGames={getPublicGames} 
                publicGames={publicGames} 
                joinGame={joinGame}
            />
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={() => setModalVisibility(false)}>Close</Button>
        </Modal.Footer>
    </Modal>
}

export default FindGameModal