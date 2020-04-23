import React from 'react'
import { Box } from '@material-ui/core/'
import WelcomePage from './views/PlayPage/Index'
import CreateGame from './views/PlayPage/CreateGame'
import SignIn from './SignIn'

const MainMenu = ({setView, view, createGame}) => {
    const getPage = () => {
        switch(view){
            case 'play': return <WelcomePage setView={setView} />
            case 'play_create': return  <CreateGame createGame={createGame} setView={setView}/>
            case 'play_find': return <Box><input type="button" value="GO BACK" onClick={() => setView('play')}></input></Box>
            case 'play_quick': return <Box><input type="button" value="GO BACK" onClick={() =>  setView('play')}></input></Box>
            case 'statistics': return <Box><input type="button" value="GO BACK" onClick={() => setView('statistics')}></input></Box>
            case 'profile': return <Box><input type="button" value="GO BACK" onClick={() => setView('profile')}></input></Box>
            case 'login': return <SignIn setView={setView} />
            default: return <WelcomePage setView={setView} />
        }
    }
    return getPage()
}

export default MainMenu