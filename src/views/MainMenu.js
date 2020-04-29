import React, { useState } from 'react'
import { Box } from '@material-ui/core/'
import WelcomePage from './PlayPage/Index'
import CreateGame from './PlayPage/CreateGame'
import FindGamePage from './PlayPage/FindGame'
import LoginPage from './LoginPage/Index'

const MainMenu = ({ toggleGame, view, setView, socket, gamertag, setGamertag }) => {
    const [roomCode, setRoomCode] = useState('')
    const [joiningState, setJoiningState] = useState(false)
    const [creatingState, setCreatingState] = useState(false)
    const [publicGames, setPublicGames] = useState([])

    function createGame(gameProperties) {
        setCreatingState(true)
        socket.emit('create game', { gamertag, roomCode, gameProperties })
    }
    function getPublicGames() {
        socket.emit('get public games')
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
        switch(view){
            case 'play': return <WelcomePage setView={setView} setGamertag={setGamertag} gamertag={gamertag}/>
            case 'play_create': return  <CreateGame createGame={createGame} setView={setView} setRoomCode={setRoomCode} creatingState={creatingState} gamertag={gamertag}/>
            case 'play_find': return <FindGamePage setView={setView} joinGame={joinGame} setRoomCode={setRoomCode}/>
            case 'play_quick': return <Box><input type="button" value="GO BACK" onClick={() =>  setView('play')}></input></Box>
            case 'statistics': return <Box><input type="button" value="GO BACK" onClick={() => setView('play')}></input></Box>
            case 'profile': return <Box><input type="button" value="GO BACK" onClick={() => setView('play')}></input></Box>
            case 'login': return <LoginPage setView={setView} />
            default: return <WelcomePage setView={setView} />
        }
    }
    return getPage()
}

export default MainMenu