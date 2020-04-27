import React from 'react'

import StandingsBox from './StandingsBox'
import StandingsCell from './StandingsRow'

import Grid from '@material-ui/core/Grid'

const RankRow = ({ rank }) => {
    const divStyle = {
        textAlign: 'center'
    }

    const boxStyle = {
        border: '1px solid blue'
    }

    return (
        <div style={divStyle}>
            <Grid item xs={12}>
                <StandingsCell rank={1}/>
                <StandingsCell rank={2}/>
                <StandingsCell rank={3}/>
                <StandingsCell rank={4}/>
                <StandingsCell rank={5}/>
                <StandingsCell rank={6}/>
            </Grid>
        </div>
    )
}

export default RankRow
