import React from 'react'
import StandingsBox from './StandingsBox'

const StandingsCell = ({ rank, player }) => {
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

    
        return (
            <div style={divStyle}>
                <StandingsBox rank={rank}/>
                <div style={cellStyle}>
                    <h5 style={textStyle}>{player.gamertag}</h5>
                </div>
        </div>
        )
   
    
}

export default StandingsCell
