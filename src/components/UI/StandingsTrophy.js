import React from 'react'

import Grid from '@material-ui/core/Grid'

import firstPlaceTrophy from '../../assets/trophies/firstPlace.svg'
import secondPlaceTrophy from '../../assets/trophies/secondPlace.svg'
import thirdPlaceTrophy from '../../assets/trophies/thirdPlace.svg'


const StandingsTrophy = ({ standing, firstPlace, secondPlace, thirdPlace }) => {

    const firstPlaceStyle = {
        width: 70,
        height: 70,
        marginTop: 40,
        display:'inline-block',
    }

    const secondPlaceStyle = {
        width: 70,
        height: 70,
    }

    const thirdPlaceStyle = {
        width: 70,
        height: 70,
    }

    const secondPlaceDivStyle = {
        float: 'right',
        marginTop: 70,
    }

    const thirdPlaceDivStyle = {
        float: 'left',
        marginTop: 70,
    }

    const textStyle = {
        color: 'rgb(255, 255, 255)',
        marginTop: 20
    }

    if(standing === 1) {
        return (
            <Grid item xs={4}>
                <div>
                    <img style={firstPlaceStyle} alt="firstPlaceTrophyIcon" src={firstPlaceTrophy} />
                    <h6 style={textStyle}>{firstPlace}</h6>
                </div>
            </Grid>
        )
    } else if (standing === 2) {
        return (
            <Grid item xs={4}>
                <div style={secondPlaceDivStyle}>
                    <img style={secondPlaceStyle} alt="secondPlaceTrophyIcon" src={secondPlaceTrophy} />
                    <h6 style={textStyle}>{secondPlace}</h6>
                </div>
            </Grid>
        )
    } else if (standing === 3) {
        return (
            <Grid item xs={4}>
                <div style={thirdPlaceDivStyle}>
                    <img style={thirdPlaceStyle} alt="thirdPlaceTrophyIcon" src={thirdPlaceTrophy} />
                    <h6 style={textStyle}>{thirdPlace}</h6>
                </div>
            </Grid>
        )
    }
}

export default StandingsTrophy
