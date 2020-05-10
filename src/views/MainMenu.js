import React, { useState, useEffect } from 'react'
import WelcomePage from './PlayPage/Index'
import CreateGame from './PlayPage/CreateGame'
import FindGamePage from './PlayPage/FindGame'

document.title = 'Welcome!'

const MainMenu = ({ socket, view, setView, setGamertag, gamertag, setShowBackButton }) => {
    const [roomCode, setRoomCode] = useState('')
    const [games, setGames] = useState([])
    const [loadingState, setLoadingState] = useState(false)
    useEffect(() => {
        socket.on("send games", data => {
            setGames(data)
            setLoadingState(false)
        })
        socket.on("error while joining", errorMsg => {
            setLoadingState(false)
            alert(errorMsg)
        })
    }, [])
    function createGame(gameProperties) {
        setLoadingState(true)
        socket.emit('create game', { gamertag, roomCode, gameProperties })
    }
    function joinGame(roomcodeGiven = undefined) {
        setLoadingState(true)
        if(roomcodeGiven === undefined) {
            socket.emit("join game", { gamertag, roomCode })
        } else {
            socket.emit("join game", { gamertag, roomCode: roomcodeGiven })
        }
    }
    function fetchGames(filters) {
        setLoadingState(true)
        socket.emit("get games", filters)
    }
    const getPage = () => {
        setShowBackButton(false)
        switch(view){
            case 'play_create': 
                setShowBackButton(true)
                return <CreateGame createGame={createGame} setRoomCode={setRoomCode} loadingState={loadingState} />
            case 'play_find': 
                setShowBackButton(true)
                return <FindGamePage joinGame={joinGame} setRoomCode={setRoomCode} fetchGames={fetchGames} loadingState={loadingState} games={games} />
            default: return <WelcomePage setView={setView} createGame={createGame} gamertag={gamertag} setGamertag={setGamertag} />
        }
    }
    return getPage()
}

export default MainMenu