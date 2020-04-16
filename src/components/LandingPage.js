import React from 'react'
import VerticalNavBar from './UI/NavBar'
import Grid from '@material-ui/core/Grid'

const LandingPage = ({createGame}) => {
    return (
        <div style={{marginRight: -20, marginLeft: -20, position: 'relative'}}>
            <Grid container>
                <Grid item><VerticalNavBar createGame={createGame}/></Grid>
            </Grid>
        </div>
    )
}

export default LandingPage
