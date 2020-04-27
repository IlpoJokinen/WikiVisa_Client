import React from 'react'

const StandingsBox = ({ rank }) => {
    const divStyle = {
        width: 60,
        height: 60,
        backgroundColor: '#879DFA',
        borderRadius: '360px',
        display: 'inline-block'
    }

    const textStyle = {
        textAlign: 'center',
        paddingTop: 18,
        fontFamliy: 'IBM Plex Sans',
        color: 'rgb(255, 255, 255)',
    }

    return (
        <div style={divStyle}>
           <h5 style={textStyle}>{rank}</h5> 
        </div>
    )
}

export default StandingsBox
