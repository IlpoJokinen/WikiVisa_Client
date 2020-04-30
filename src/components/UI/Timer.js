import React, { useEffect, useState } from 'react'

const Timer = ({ color, timeRemaining }) => {

    const [timer,  setTimer] = useState(timeRemaining)

    const divStyle = {
        margin: '0 auto',
        marginTop: '50px',
        width: '70px',
        height: '70px',
        border: `2px solid ${color}`,
        borderRadius: 360,
    }
    
    const textStyle = {
        paddingTop: '20px',
        textAlign: 'center',
        color: color,
        fontSize: '20px',
    }

    useEffect(() => {
        let mounted = true
        setTimeout(() => {
            if(timer > 0 && mounted){
                setTimer(timer - 1)
            }
        }, 1000)
        return () => mounted = false
    }, [timer])

    return (
        <div style={divStyle}>
            <h4 style={textStyle}>{timer}</h4>
        </div>
    )
}

export default Timer
