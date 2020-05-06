import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid'

import GameEndInfoBox from '../../components/UI/GameEndInfoBox'
import StandingsRow from '../../components/UI/StandingsRow'

const GameEnd = ({ gamertag, players }) => {
    const [ end, setEnd ] = useState(true)

    const divStyle = {
        textAlign: 'center',
        width: '100%'
    }

    return (
        <div style={divStyle}>
            <Grid container>
                <Grid item xs={12}>
                    <GameEndInfoBox firstPlace={'PlayerX'} secondPlace={'PlayerY'} thirdPlace={'PlayerZ'}/>
                </Grid>
                <Grid item xs={12}>
                    <StandingsRow rank={4} end={end}/>
                    <StandingsRow rank={5} end={end}/>
                    <StandingsRow rank={6} end={end}/>
                    <StandingsRow rank={7} end={end}/>
                    <StandingsRow rank={8} end={end}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default GameEnd
