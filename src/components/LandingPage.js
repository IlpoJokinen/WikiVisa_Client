import React from 'react'
import VerticalNavBar from './UI/NavBar'
import Grid from '@material-ui/core/Grid'

const LandingPage = () => {
    return (
        <div style={{marginRight: -20, marginLeft: -20}}>
            <Grid container>
                <Grid item><VerticalNavBar/></Grid>
            </Grid>
        </div>
    )
}

export default LandingPage
