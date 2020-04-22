import React, { useState } from 'react'
import WelcomePage from './views/LandingPage/WelcomePage'
import CreateGame from './views/LandingPage/CreateGame'
import Grid from '@material-ui/core/Grid'

const PlayPage = ({createGame}) => {
    const [screen, setScreen] = useState('')
    const getScreen = () => {
        switch(screen){
            case 'createGame': return <CreateGame setScreen={setScreen} createGame={createGame}/>
            default: return <WelcomePage setScreen={setScreen}/>
        }
    }
    return getScreen()
}

export default PlayPage
