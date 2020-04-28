import React, { useState } from 'react'
import { Box } from '@material-ui/core/'
import WelcomePage from './views/PlayPage/Index'
import CreateGame from './views/PlayPage/CreateGame'
import FindGamePage from './views/PlayPage/FindGame'
import LoginPage from './views/LoginPage/Index'

const MainMenu = ({ toggleGame, view, setView, socket }) => {
    const [roomCode, setRoomCode] = useState('')
    const [joiningState, setJoiningState] = useState(false)
    const [creatingState, setCreatingState] = useState(false)
    const [gamertag, setGamertag] = useState("")
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
    function asd() {
        socket.emit('test2')
    }
    const getPage = () => {
        switch(view){
            case 'play': return <WelcomePage setView={setView} />
            case 'play_create': return  <CreateGame createGame={createGame} setView={setView} setRoomCode={setRoomCode} creatingState={creatingState}/>
            case 'play_find': return <FindGamePage setView={setView} joinGame={joinGame} setRoomCode={setRoomCode}/>
            case 'play_quick': return <Box><input type="button" value="GO BACK" onClick={() =>  asd()}></input></Box>
            case 'statistics': return <Box><input type="button" value="GO BACK" onClick={() => setView('statistics')}></input></Box>
            case 'profile': return <Box><input type="button" value="GO BACK" onClick={() => setView('profile')}></input></Box>
            case 'login': return <LoginPage setView={setView} />
            default: return <WelcomePage setView={setView} />
        }
    }
    return getPage()
}

export default MainMenu