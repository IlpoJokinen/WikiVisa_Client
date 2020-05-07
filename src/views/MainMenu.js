import React, { useState, useEffect } from 'react'
import WelcomePage from './PlayPage/Index'
import CreateGame from './PlayPage/CreateGame'
import FindGamePage from './PlayPage/FindGame'

document.title = 'Welcome!'

const MainMenu = ({ socket, view, setView, setGamertag, gamertag, setShowBackButton }) => {
    const [roomCode, setRoomCode] = useState('')
    const [games, setGames] = useState([])
    const [joiningState, setJoiningState] = useState(false)
    const [creatingState, setCreatingState] = useState(false)
    useEffect(() => {
        socket.on("send games", data => {
            setGames(data)
        })
    }, [])
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
    
    function fetchGames(filters) {
        socket.emit("get games", filters)
    }

    const getPage = () => {
        setShowBackButton(false)
        switch(view){
            case 'play_create': 
                setShowBackButton(true)
                return <CreateGame createGame={createGame} setRoomCode={setRoomCode} creatingState={creatingState} />
            case 'play_find': 
                setShowBackButton(true)
                return <FindGamePage joinGame={joinGame} setRoomCode={setRoomCode} fetchGames={fetchGames} games={games} />
            default: return <WelcomePage setView={setView} createGame={createGame} gamertag={gamertag} setGamertag={setGamertag} />
        }
    }
    return getPage() 
}

export default MainMenu