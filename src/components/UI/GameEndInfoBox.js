import React from 'react'

import Grid from '@material-ui/core/Grid'

import StandingsTrophy from './StandingsTrophy'

const GameEndInfoBox = ({ firstPlace, secondPlace, thirdPlace }) => {
    
    const infoBoxStyle = {
        height: 300,
        backgroundColor: '#879DFA',
        marginBottom: 70,
        marginTop: -16,
    }

    const headingStyle = {
        color: 'rgb(255, 255, 255)',
        marginTop: 30,
    }

    return (
        <div style={infoBoxStyle}>
            <Grid container>
                <Grid item xs={12}>
                    <h5 style={headingStyle}>Game end results</h5>
                </Grid>
                <StandingsTrophy secondPlace={secondPlace} standing={2}/>
                <StandingsTrophy firstPlace={firstPlace} standing={1}/>
                <StandingsTrophy thirdPlace={thirdPlace} standing={3}/>
            </Grid>
        </div>
    )
}

export default GameEndInfoBox
