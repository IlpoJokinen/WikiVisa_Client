import React, { useState } from 'react'
import WelcomePage from './PlayPage/Index'
import CreateGame from './PlayPage/CreateGame'
import FindGamePage from './PlayPage/FindGame'

const MainMenu = ({ socket, toggleGame, view, setView, gamertag, setGamertag, setShowBackButton }) => {
    const [roomCode, setRoomCode] = useState('')
    const [joiningState, setJoiningState] = useState(false)
    const [creatingState, setCreatingState] = useState(false)
    function createGame(gameProperties) {
        setCreatingState(true)
        socket.emit('create game', { gamertag, roomCode, gameProperties })
    }
    function joinGame(roomcodeGiven = undefined) {
        setJoiningState(true)
        if(roomcodeGiven === undefined) {
            socket.emit("join game", { gamertag, roomCode })
        } else {
            socket.emit("join game", { gamertag, roomCode: roomcodeGiven })
        }
    }
    const getPage = () => {
        setShowBackButton(false)
        switch(view){
            case 'play_create': 
                setShowBackButton(true)
                return <CreateGame createGame={createGame} setRoomCode={setRoomCode} creatingState={creatingState} />
            case 'play_find': 
                setShowBackButton(true)
                return <FindGamePage joinGame={joinGame} setRoomCode={setRoomCode} />
            default: return <WelcomePage setView={setView} />
        }
    }
    return getPage() 
}

export default MainMenu