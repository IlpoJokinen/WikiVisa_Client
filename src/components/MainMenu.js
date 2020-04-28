import React, { useState } from 'react'
import { Box } from '@material-ui/core/'
import WelcomePage from './views/PlayPage/Index'
import CreateGame from './views/PlayPage/CreateGame'
import FindGamePage from './views/PlayPage/FindGame'
import LoginPage from './views/LoginPage/Index'

const MainMenu = ({ setView, setRoomCode, setGamertag, gamertag, view, createGame, joinGame, joiningState, creatingState, getPublicGames, publicGames }) => {
    const [roomCode2, setRoomCode2] = useState('')
    const getPage = () => {
        switch(view){
            case 'play': return <WelcomePage setView={setView} />
            case 'play_create': return  <CreateGame createGame={createGame} setView={setView} setRoomCode2={setRoomCode2} creatingState={creatingState}/>
            case 'play_find': return <FindGamePage setView={setView} joinGame={joinGame} setRoomCode={setRoomCode}/>
            case 'play_quick': return <Box><input type="button" value="GO BACK" onClick={() =>  setView('play')}></input></Box>
            case 'statistics': return <Box><input type="button" value="GO BACK" onClick={() => setView('statistics')}></input></Box>
            case 'profile': return <Box><input type="button" value="GO BACK" onClick={() => setView('profile')}></input></Box>
            case 'login': return <LoginPage setView={setView} />
            default: return <WelcomePage setView={setView} />
        }
    }
    return getPage()
}

export default MainMenu