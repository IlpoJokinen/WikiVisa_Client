import React, { useState } from 'react'
import GametagScreen from './views/WelcomePage/Gamertag'
import JoinOrCreateScreen from './views/WelcomePage/JoinOrCreate'
import JoinGameScreen from './views/WelcomePage/JoinGame'
import CreateGameScreen from './views/WelcomePage/CreateGame'
import { Container, Row, Col } from 'react-bootstrap'

const WelcomeScreen = ({ setGamertag, gamertag, setRoomCode, roomCode, joiningState, joinGame, createGame, creatingState, getPublicGames, publicGames }) => {
    const [screen, setScreen] = useState("")

    const getScreen = () => {
        switch(screen){
            case 'JoinOrCreate': return <JoinOrCreateScreen 
                setScreen={setScreen} 
            /> 
            case 'JoinGame': return <JoinGameScreen 
                setScreen={setScreen}
                setRoomCode={setRoomCode} 
                roomCode={roomCode} 
                joiningState={joiningState} 
                joinGame={joinGame}
                getPublicGames={getPublicGames}
                publicGames={publicGames}
            />
            case 'CreateGame': return <CreateGameScreen 
                setScreen={setScreen}
                setRoomCode={setRoomCode} 
                creatingState={creatingState} 
                createGame={createGame} 
            />
            default: return <GametagScreen 
                setScreen={setScreen}
                setGamertag={setGamertag} 
                gamertag={gamertag}
            />
        }
    }

    return <Container>
        <Row className="justify-content-md-center">
            <Col sm={8}>
                { getScreen() }
            </Col>
        </Row>
    </Container>
}

export default WelcomeScreen