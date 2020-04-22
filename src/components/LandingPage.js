import React, { useState } from 'react'
import { Box } from '@material-ui/core/'
import PlayPage from './PlayPage'
import SignIn from './SignIn'

const LandingPage = ({createGame}) => {
    const [page, setPage] = useState('play')
    const getPage = () => {
        switch(page){
            case 'play': return <PlayPage createGame={createGame}/>
            case 'statistic': return <Box></Box>
            case 'profile': return <Box></Box>
            case 'login': return <SignIn />
            default: return <PlayPage createGame={createGame}/>
        }
    }
    return getPage()
}

export default LandingPage