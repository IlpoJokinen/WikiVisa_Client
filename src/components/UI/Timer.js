import React from 'react'

const Timer = ({ timeRemaining }) => {
    const divStyle = {
        margin: '0 auto',
        marginTop: '50px',
        width: '70px',
        height: '70px',
        border: '2px solid white',
        borderRadius: 360,
    }

    const textStyle = {
        paddingTop: '20px',
        textAlign: 'center',
        color: 'white',
        fontSize: '20px',
    }

    return (
        <div style={divStyle}>
            <h4 style={textStyle}>{timeRemaining}</h4>
        </div>
    )
}

export default Timer
