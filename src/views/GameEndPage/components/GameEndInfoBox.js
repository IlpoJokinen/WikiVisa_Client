import React from 'react'

import { Grid, Button } from '@material-ui/core/'
import Header from '../../../components/UI/Header'
import StandingsTrophy from './StandingsTrophy'

const GameEndInfoBox = (props) => {
    const { firstPlace, secondPlace, thirdPlace } = props
    return (
            <Grid container>
                <Grid item xs={12} style={{textAlign:"center", marginTop: 30, marginBottom: 30 }}>
                    <Header white size={3}>Game End Results</Header>
                </Grid>
                <Grid item xs={12}>
                    <StandingsTrophy player={firstPlace} standing={1}/>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={6}>{props.secondPlace ? <StandingsTrophy player={secondPlace} standing={2}/> : null}</Grid>
                        <Grid item xs={6}>{props.thirdPlace ? <StandingsTrophy player={thirdPlace} standing={3}/> : null}</Grid>
                    </Grid>
                </Grid>
                <Grid style={{textAlign: "center", margin: "20px 0"}} item xs={12}><Button variant="outlined" size="large" style={{color: "#fff", border: "1px solid #fff"}} onClick={() => window.location.reload()}>Return to Main Menu</Button></Grid>
            </Grid>
    )
}

export default GameEndInfoBox
