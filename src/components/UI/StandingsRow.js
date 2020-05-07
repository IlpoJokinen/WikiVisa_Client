import React from 'react'
import StandingsBox from './StandingsBox'

const StandingsCell = ({ rank, points,  pointsAdded, gamertag, end }) => {
    const cellStyle = {
        display: 'inline-block',
        marginLeft: 22,
        border: '2px solid #879DFA',
        borderRadius: 10,
        height: 65,
        marginBottom: 30
    }

    const divStyle = {
        textAlign: 'center',
    }

    const textStyle = {
        fontFamily: 'IBM Plex Sans',
        fontSize: 16,
        color: '#879DFA',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        display: 'inline-block'
    }

    const addedPointsStyle = {
        display: 'inline-block',
        fontFamily: 'IBM Plex Sans',
        color: '#879DFA',
    }

    if(end) {
        return (
            <div style={divStyle}>
                <StandingsBox rank={rank}/>
                <div style={cellStyle}>
                    <h5 style={textStyle}>Gamertag goes here</h5>
                </div>
        </div>
        )
    } else {
        return (
            <div style={divStyle}>
                <StandingsBox rank={rank}/>
                <div style={cellStyle}>
                    <h5 style={textStyle}>Gamertag goes here</h5>
                    <h6>{points}</h6>
                    <h6 style={addedPointsStyle}>{pointsAdded >= 0 ? "+" : " "} {pointsAdded} points</h6>
                </div>
            </div>
        )
    }
}

export default StandingsCell
